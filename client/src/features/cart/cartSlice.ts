import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface CartItem {
  id: number;
  quantity: number;
  size: string;
}

interface CartState {
  cartItems: CartItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  cartItems: [],
  status: 'idle',
  error: null,
}

export const increaseItemQuantityServer = createAsyncThunk(
  'cart/increaseItemQuantityServer',
  async ({ id, size }: {id: number, size: string}, { getState }) => {
    const state = getState() as RootState;
    const token = state.user.token; 

    const response = await fetch(`/api/cart/add/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id, size }),
    });

    if (!response.ok) {
      throw new Error('Server error occurred while adding a product to the cart.');
    }

    const result = await response.json();
    return result;
  }
);

export const decreaseItemQuantityServer = createAsyncThunk(
  'cart/decreaseItemQuantityServer',
  async ({ id, size }: {id: number, size: string}, { getState }) => {
    const state = getState() as RootState;
    const token = state.user.token; 

    const response = await fetch(`/api/cart/decrease/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id, size }),
    });

    if (!response.ok) {
      throw new Error('Server error occurred while reducing the quantity of a product in the cart.');
    }

    const result = await response.json();
    return result;
  }
);

export const removeCartItemServer = createAsyncThunk(
  'cart/removeCartItemServer',
  async ({ id, size }: {id: number, size: string}, { getState }) => {
    const state = getState() as RootState;
    const token = state.user.token; 

    const response = await fetch(`/api/cart/remove/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id, size }),
    });

    if (!response.ok) {
      throw new Error('Server error occurred while deleting a product from the cart.');
    }

    const result = await response.json();
    return result;
  }
);

export const clearCartServer = createAsyncThunk(
  'cart/clearCartServer', 
  async () => {
    const res = await fetch('api/cart/clear', {
      method: 'POST',
    });

    if (!res.ok) {
      throw new Error('Error clearing cart');
    }

    const result = await res.json();
    return result;
  }
);


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    increaseItemQuantity(state, action: PayloadAction<{id: number, size: string}>) {
      const { id, size } = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === id && cartItem.size === size);

      if (existingItem) {
        existingItem.quantity++;
        return;
      }

      state.cartItems = [{ id, quantity: 1, size }, ...state.cartItems];
    },
    decreaseItemQuantity(state, action: PayloadAction<{id: number, size: string}>) {
      const { id, size } = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === id && cartItem.size === size);

      if (!existingItem) {
        return;
      }
      
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(cartItem => !(cartItem.id === id && cartItem.size === size));
        return;
      }
      existingItem.quantity--;
    },
    removeCartItem(state, action: PayloadAction<{id: number, size: string}>) {
      const { id, size } = action.payload;
      state.cartItems = state.cartItems.filter(cartItem => !(cartItem.id === id && cartItem.size === size));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(increaseItemQuantityServer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(increaseItemQuantityServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { id, size, quantity } = action.payload.addedProduct;
        const existingItem = state.cartItems.find(cartItem => cartItem.id === id && cartItem.size === size);

        if (existingItem) {
          existingItem.quantity = quantity;
        } else {
          state.cartItems = [{ id, quantity, size }, ...state.cartItems];
        }
      })
      .addCase(increaseItemQuantityServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to add item to cart';
      })
      .addCase(decreaseItemQuantityServer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(decreaseItemQuantityServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { id, size } = action.payload.decreasedProduct;
        const existingItem = state.cartItems.find(cartItem => cartItem.id === id && cartItem.size === size);
  
        if (!existingItem) {
          return;
        }
        
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(cartItem => !(cartItem.id === id && cartItem.size === size));
          return;
        }
        existingItem.quantity--;
      })
      .addCase(decreaseItemQuantityServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to reduce item in cart';
      })
      .addCase(removeCartItemServer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(removeCartItemServer.fulfilled, (state, action) => {
        state.status = 'succeeded';

        const { id, size } = action.payload.removedProduct;
        state.cartItems = state.cartItems.filter(cartItem => !(cartItem.id === id && cartItem.size === size));
      })
      .addCase(removeCartItemServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete item in cart';
      })
      .addCase(clearCartServer.fulfilled, state => {
        state.cartItems = [];
      })
  },
});

export const { setCart, clearCart, increaseItemQuantity, decreaseItemQuantity, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;

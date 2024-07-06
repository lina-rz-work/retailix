import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "../../types/order";

interface CartItem {
  id: number;
  quantity: number;
  size: string;
}

export const createOrder = createAsyncThunk(
  'orders/createOrder',
    async ({ items, total }: {items: CartItem[], total: string}) => {

    const res = await fetch('/api/orders/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({items, totalAmount: total }),
    });

    if (!res.ok) {
      throw new Error('Error while creating order');
    }

    const result = await res.json();
    return result;
  }
)

export const getOrders = createAsyncThunk(
  'orders/getOrders',
  async () => {
    const res = await fetch('/api/orders/getOrders', {
      method: 'GET',
      headers: {},
    })

    if (!res.ok) {
      throw new Error('Failed fetching the orders');
    }

    const data = await res.json()
    return data.map((order: any) => {
      return {
        orderId: order._id, 
        items: order.items, 
        totalAmount: order.totalAmount, 
        createdAt: order.createdAt
      }
    });
  }
)

export const cancelOrder = createAsyncThunk(
  'orders/cancelOrder',
  async (orderId: string) => {
    const res = await fetch('/api/orders/cancelOrder', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId }),
    });

    if (!res.ok) {
      throw new Error('Failed to cancel the order');
    }

    const result = await res.json();
    return result;
  }
)

interface OrdersState {
  orders: Order[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  status: 'idle',
  error: null
}

const OrdersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    clearOrders: (state) => {
      state.orders = [];
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(createOrder.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(createOrder.fulfilled, (state, action) => {
      const {_id, items, totalAmount, createdAt } = action.payload;
      state.orders.push({ orderId: _id, items, totalAmount, createdAt });
      state.status = 'succeeded';
      state.error = null;
    })
    .addCase(createOrder.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to add item to cart';
    })
    .addCase(getOrders.pending, state => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.status = 'succeeded';
      state.error = null;
    })
    .addCase(getOrders.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed detching the orders';
    })
    .addCase(cancelOrder.fulfilled, (state, action) => {
      state.orders = state.orders.filter(order => order.orderId !== action.payload.cancelledOrderId);
    })

  }
});

export const { clearOrders } = OrdersSlice.actions;

export default OrdersSlice.reducer;

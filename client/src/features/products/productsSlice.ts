import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductProps } from "../../types/product";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch('/api/products', {
      method: 'GET'
    });

    if (!res.ok) {
      throw new Error('Server error occurred while fetching the data.');
    }

    const data = await res.json();
    return data;
  }
);

interface ProductsState {
  allProducts: ProductProps[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any | null;
}

const initialState: ProductsState = {
  allProducts: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  }
});

export default productsSlice.reducer;

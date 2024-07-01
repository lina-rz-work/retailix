import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../types/product";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewCollection = createAsyncThunk(
  'newCollection/fetchNewCollection', 
  async () => {
    const res = await fetch('/api/products/newcollection', {
      method: 'GET'
    });

    if (!res.ok) {
      throw new Error('failed while fetching new collection');
    }

    const data = await res.json();
    return data;
  }
)

interface NewCollectionState {
  newCollection: ProductProps[];
  status: 'idle' | 'succeeded' | 'failed' | 'loading';
  error: any | null;
}

const initialState: NewCollectionState = {
  newCollection: [],
  status: 'idle',
  error: null
}

const newCollectionSlice  = createSlice({
  name: 'newCollection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewCollection.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchNewCollection.fulfilled, (state, action) => {
        state.newCollection = action.payload;
        state.status = 'idle';
        state.error = null;
      })
      .addCase(fetchNewCollection.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  }
});

export default newCollectionSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UiState {
  loginVisible: boolean,
  cartVisible: boolean,
}

const initialState: UiState = {
  loginVisible: false,
  cartVisible: false,
}

const uiStateSlice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    setLoginVisible(state, action: PayloadAction<boolean>) {
      state.loginVisible = action.payload;
    },
    setCartVisible(state, action: PayloadAction<boolean>) {
      state.cartVisible = action.payload;
    }
  }
})

export const { setLoginVisible, setCartVisible } = uiStateSlice.actions;
export default uiStateSlice.reducer;

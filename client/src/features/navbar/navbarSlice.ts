import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {
  activeMenuItem: string | null;
}

const initialState: NavbarState = {
  activeMenuItem: 'home'
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveMenuItem(state, action) {
      state.activeMenuItem = action.payload;
    }
  }
});

export const { setActiveMenuItem } = navbarSlice.actions;

export default navbarSlice.reducer;

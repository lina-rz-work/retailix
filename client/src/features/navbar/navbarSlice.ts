import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {
  activeMenuItem: string | null;
  scrolled: boolean;
}

const initialState: NavbarState = {
  activeMenuItem: 'home',
  scrolled: false,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveMenuItem(state, action) {
      state.activeMenuItem = action.payload;
    },
    setScrolled(state, action) {
      state.scrolled = action.payload;
    }
  }
});

export const { setActiveMenuItem, setScrolled } = navbarSlice.actions;

export default navbarSlice.reducer;

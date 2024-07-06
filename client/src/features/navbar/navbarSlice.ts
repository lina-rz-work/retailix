import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {
  activeMenuItem: string | null;
  scrolled: boolean;
  loading: boolean;
}

const initialState: NavbarState = {
  activeMenuItem: null,
  scrolled: false,
  loading: false,
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
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  }
});

export const { setActiveMenuItem, setScrolled, setLoading } = navbarSlice.actions;

export default navbarSlice.reducer;

import { RootState } from "../../store/store";

export const selectLoginVisible = (state: RootState) => state.uiState.loginVisible;

export const selectCartVisible = (state: RootState) => state.uiState.cartVisible;

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export const selectCartItems = (store: RootState) => store.cart.cartItems;
const selectProducts = (state: RootState) => state.products;


export const selectCartQuantity = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);

// export const selectCartQuantity = (state: RootState) =>
//   state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);


export const selectTotalPrice = createSelector(
  [selectCartItems, selectProducts],
  (cartItems, products) => {
    const totalPrice = cartItems.reduce((total, item) => {
      const product = products.allProducts.find(product => product.id === item.id);
      return total + (product?.newPrice ?? 0) * item.quantity;
    }, 0);
    return Number(totalPrice.toFixed(2));
  }
);

// export const selectTotalPrice = (state: RootState) => {
//   const products = state.products;  // const { products } = state;
//   return state.cart.cartItems.reduce((total, item) => {
//       const product = products.find(product => product.id === item.id);
//       if (!product) return total;
//       return total + product.new_price * item.quantity;
//   }, 0);
// };


export const selectItemQuantity = (state: RootState, id: number) => {
  return state.cart.cartItems.find(cartItem  => cartItem .id === id)?.quantity || 0;
};

// export const selectItemQuantity = createSelector(
//   [selectCartItems, (state: RootState, id: number) => id],
//   (cartItems, id) => cartItems.find(cartItem => cartItem.id === id)?.quantity || 0
// );

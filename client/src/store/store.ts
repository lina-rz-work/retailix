import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
import uiStateReducer from "../features/uiState/uiStateSlice";
import userReducer from "../features/user/userSlice";
import navbarReducer from "../features/navbar/navbarSlice";
import newCollectionReducer from "../features/newCollection/newCollectionSlice";
import ordersReducer from "../features/orders/ordersSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "orders"],
}

const RootReducer = {
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
  uiState: uiStateReducer,
  navbar: navbarReducer,
  products: productsReducer,
  newCollection: newCollectionReducer,
}

const persistedReducer = persistReducer(persistConfig, combineReducers(RootReducer));

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

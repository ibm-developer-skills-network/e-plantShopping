// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import store from './store.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

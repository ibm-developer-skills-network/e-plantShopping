import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './path/to/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

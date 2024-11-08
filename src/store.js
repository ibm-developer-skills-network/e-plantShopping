import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cart reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer to the store
  },
});

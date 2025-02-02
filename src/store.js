import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cart slice

// Create and configure the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart slice reducer to the store
  },
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';  // Import the cart reducer

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer,  // Add the cart reducer to the store
  },
});

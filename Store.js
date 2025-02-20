import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Import the cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Register cart reducer
  },
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';  // Import the reducer for cart management

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer,  // Assign the cartReducer to manage cart state
    },
});

// Export the store to use it throughout the app
export default store;

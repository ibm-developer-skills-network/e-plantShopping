// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cartReducer

// Configure the store with cartReducer
const store = configureStore({
    reducer: {
        cart: cartReducer, // Assign cartReducer to the cart slice of the state
    },
});

// Export the store so it can be used throughout the app
export default store;
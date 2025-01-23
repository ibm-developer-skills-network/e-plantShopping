// Importing necessary functions and files
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configuring the store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Assigning the cartReducer to manage the cart slice of the state
    },
});

// Exporting the store
export default store;
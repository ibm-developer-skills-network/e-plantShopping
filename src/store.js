import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the store with the cart reducer
const store = configureStore({
    reducer: {
        cart: cartReducer, // cart slice of state managed by cartReducer
    },
});

// Export the configured store as the default export
export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the path if necessary

const store = configureStore({
    reducer: {
        cart: cartReducer, // Manages the state slice 'cart'
    },
});

export default store;
// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Path to your cart reducer

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;




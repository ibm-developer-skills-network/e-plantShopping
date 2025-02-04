import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Import the cart reducer

const store = configureStore({
    reducer: {
        cart: cartReducer, // Assign cartReducer to the cart slice
    },
});

export default store;

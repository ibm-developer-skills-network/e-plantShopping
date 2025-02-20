import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Import the cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Register cart reducer
  },
});

export default store;

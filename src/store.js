import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the import path as needed

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});


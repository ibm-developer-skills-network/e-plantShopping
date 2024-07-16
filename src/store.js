import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreateSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
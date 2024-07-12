import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
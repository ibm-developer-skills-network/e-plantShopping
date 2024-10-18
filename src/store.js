import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addItem, removeItem, updateQuantity } from './CartSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    
    },
});
export default store
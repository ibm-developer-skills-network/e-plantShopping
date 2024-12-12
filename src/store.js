import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import productsReducer from './productsSlice'; 
 const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
    },
});
export default store

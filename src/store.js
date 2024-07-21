import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '/e-plantShopping/src/CartSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store

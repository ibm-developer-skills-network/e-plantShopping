import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import addItemReducer from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
        addItem: addItemReducer,
    },
});
export default store

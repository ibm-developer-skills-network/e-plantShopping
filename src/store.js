import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import counterReducer from './CounterSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
        counter:counterReducer,
    },
});
export default store

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice';

const store = configureStore({
    reducer: {
        cartReducer
    },
});
export default store
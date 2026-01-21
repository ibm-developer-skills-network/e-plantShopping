// Create a Redux store using configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 const store = configureStore({
    // // Define the root reducer object
    reducer: {
        // // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
    },
});

// Export the store for use in the app (e.g., in <Provider store={store}>)
export default store

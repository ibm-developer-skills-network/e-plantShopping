import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Load persisted cart from localStorage if available
const persistedCart = (() => {
    try {
        const raw = localStorage.getItem('cart');
        return raw ? JSON.parse(raw) : { items: [] };
    } catch (e) {
        return { items: [] };
    }
})();

const preloadedState = {
    cart: persistedCart,
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState,
});

// Subscribe to store changes and persist cart slice
store.subscribe(() => {
    try {
        const state = store.getState();
        localStorage.setItem('cart', JSON.stringify(state.cart));
    } catch (e) {
        // ignore write errors
    }
});

export default store

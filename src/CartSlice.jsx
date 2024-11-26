import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Initialize items as an empty array
    totalQuantity: 0, // Initialize totalQuantity as 0
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
            state.totalQuantity++; // Increment totalQuantity
        },
        removeItem: (state, action) => {
            const itemToRemove = state.items.find(item => item.name === action.payload);
            if (itemToRemove) {
                state.totalQuantity -= itemToRemove.quantity; // Decrement totalQuantity by the quantity of the removed item
                state.items = state.items.filter(item => item.name !== action.payload);
            }
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                state.totalQuantity += quantity - existingItem.quantity; // Adjust totalQuantity based on the new quantity
                existingItem.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions; // Export the action creators
export const selectTotalQuantity = state => state.cart.totalQuantity; // Selector to get the total quantity
export default CartSlice.reducer; // Export the reducer as the default export

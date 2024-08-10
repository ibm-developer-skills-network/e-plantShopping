import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
            if (itemIndex > -1) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        updateQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
            if (itemIndex > -1) {
                state.items[itemIndex].quantity = action.payload.quantity;
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
    },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

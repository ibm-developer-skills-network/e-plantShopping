import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const CreatSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, name, imageUrl, cost } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ id, name, imageUrl, cost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        updateQuantity: (state, action) => {
            const { plant, diff } = action.payload;
            let itemToUpdate = state.items.find((item) => item.id === plant.id);
            if (itemToUpdate && itemToUpdate.quantity + diff > 0) {
                itemToUpdate.quantity += diff;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // { name, image, cost:"$10.00", quantity }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const incoming = action.payload;
            const existing = state.items.find(i => i.name === incoming.name);

            if (!existing) {
                state.items.push({ ...incoming, quantity: incoming.quantity ?? 1 });
            } else {
                // si ya existe, sumamos unidades (y el UI se actualiza en tiempo real)
                existing.quantity += incoming.quantity ?? 1;
            }
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const existing = state.items.find(i => i.name === name);
            if (existing) existing.quantity = quantity;
        },

        removeItem: (state, action) => {
            const { name } = action.payload;
            state.items = state.items.filter(i => i.name !== name);
        },
    },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

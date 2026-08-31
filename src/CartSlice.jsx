import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const exis = state.items.find(item => item.name === name);
        if (exis) {
            exis.quantity += 1;
        }
        else {
            state.items.push({ name, image, cost, quantity: 1});
        }
    },

    removeItem: (state, action) => {
        state.items = state.items.filter(items => items.name !== action.payload)
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const up = state.items.find(item => item.name === name);
        if ( up ) {
            up.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

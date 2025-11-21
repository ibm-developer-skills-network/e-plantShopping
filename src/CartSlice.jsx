import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex((i) => i.name === item.name);
      if (index >= 0) {
        // Increment quantity if already present
        state.items[index].quantity = (state.items[index].quantity || 1) + (item.quantity || 1);
      } else {
        // Add new item
        state.items.push(item);
      }
    },
    removeItem: (state, action) => {
      const name = action.payload.name || action.payload;
      state.items = state.items.filter((i) => i.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const index = state.items.findIndex((i) => i.name === name);
      if (index >= 0) {
        state.items[index].quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

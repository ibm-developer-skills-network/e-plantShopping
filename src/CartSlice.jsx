import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // each item: { name, image, cost, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // { name, image, cost }
      const existing = state.items.find((item) => item.name === newItem.name);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const nameToRemove = action.payload.name;
      state.items = state.items.filter((item) => item.name !== nameToRemove);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existing = state.items.find((item) => item.name === name);
      if (!existing) return;

      if (quantity <= 0) {
        // remove item when it hits 0
        state.items = state.items.filter((item) => item.name !== name);
      } else {
        existing.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

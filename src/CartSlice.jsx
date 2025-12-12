import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // action.payload is expected to be a plant object
      const plant = action.payload;
      if (!plant || !plant.name) return;

      // Look for existing item by name
      const existing = state.items.find((it) => it.name === plant.name);
      if (existing) {
        // If exists, increment quantity
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        // Add new item with quantity = 1
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // action.payload should be the plant name (string)
      const name = action.payload;
      if (!name) return;
      state.items = state.items.filter((it) => it.name !== name);
    },
    updateQuantity: (state, action) => {
      // action.payload should be { name, amount }
      const { name, amount } = action.payload || {};
      if (!name || typeof amount !== 'number') return;
      const item = state.items.find((it) => it.name === name);
      if (!item) return;
      if (amount <= 0) {
        // Remove item if quantity becomes zero or negative
        state.items = state.items.filter((it) => it.name !== name);
      } else {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

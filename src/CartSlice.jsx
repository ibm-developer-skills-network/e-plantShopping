// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Check if item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If it exists, increase quantity (or you could ignore this action)
        existingItem.quantity += 1;
      } else {
        // Add new item to cart with an initial quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Other reducers, e.g., removeItem, clearCart, etc.
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;

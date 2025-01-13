// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0 // Initialize totalQuantity
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        state.totalQuantity += quantity - item.quantity; // Update totalQuantity
        item.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === name);
      if (itemIndex > -1) {
        state.totalQuantity -= state.items[itemIndex].quantity; // Update totalQuantity
        state.items.splice(itemIndex, 1);
      }
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalQuantity += newItem.quantity; // Update totalQuantity
    }
  }
});

export const { updateQuantity, removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQuantity: 0, // Initialize totalQuantity
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      // Update totalQuantity
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
      // Update totalQuantity
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Ensure quantity is included in payload
      const itemToUpdate = state.items.find(item => item.name === name); // Corrected 'state.item' to 'state.items'
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        // Update totalQuantity
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

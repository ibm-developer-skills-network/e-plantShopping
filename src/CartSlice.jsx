// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add Item to Cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increase quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // Remove Item from Cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Update Quantity of a Specific Item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as the default export for store integration
export default cartSlice.reducer;

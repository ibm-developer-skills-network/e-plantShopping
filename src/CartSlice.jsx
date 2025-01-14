import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0 // Initialize totalQuantity
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a new plant item to the items array
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
      state.totalQuantity++; // Update totalQuantity
    },
    // Remove a plant item from the items array
    removeItem: (state, action) => {
      const name = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === name);
      if (itemIndex > -1) {
        state.totalQuantity -= state.items[itemIndex].quantity; // Update totalQuantity
        state.items = state.items.filter(item => item.name !== name); // Remove item from array
      }
    },
    // Update the quantity of a plant item in the items array
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        state.totalQuantity += quantity - itemToUpdate.quantity; // Update totalQuantity
        itemToUpdate.quantity = quantity; // Update item quantity
      }
    }
  }
});

// Export the action creators to use in ProductList.jsx and CartItem.jsx
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as the default export to use in store.js
export default cartSlice.reducer;






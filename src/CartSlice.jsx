import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const product = action.payload; // Extract the product from the dispatched action
      const existingItem = state.items.find(item => item.name === product.name); // Check if the product already exists in the cart
      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 }); // Add the product with a default quantity of 1
      } else {
        existingItem.quantity += 1; // If it exists, increment the quantity
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      const productName = action.payload; // Get the product name from the dispatched action
      state.items = state.items.filter(item => item.name !== productName); // Remove the product
    },

    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Get the product name and new quantity from the action payload
      const existingItem = state.items.find(item => item.name === name); // Find the product in the cart
      if (existingItem) {
        existingItem.quantity = quantity; // Update the quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],  // Initialize items array
  },

  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const product = action.payload;

      // Check if product is already in cart
      const existingItem = state.items.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        // Increase quantity if item already exists
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity = 1
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;  // Get product name + new quantity

      // Find item in cart
      const itemToUpdate = state.items.find(item => item.name === name);

      // Update only if item exists and quantity > 0
      if (itemToUpdate && quantity > 0) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array to hold the cart items
  },
  reducers: {
    // Reducer to add item to the cart
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItemIndex = state.items.findIndex(item => item.name === action.payload.name);

      if (existingItemIndex === -1) {
        // If the item does not exist, add it to the cart
        state.items.push(action.payload);
      } else {
        // If the item already exists, update the quantity (optional: add more logic here)
        state.items[existingItemIndex].quantity += 1;
      }
    },

    // Reducer to remove item from the cart
    removeItem: (state, action) => {
      // Filter out the item with the matching name
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    // Reducer to update the quantity of a specific item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);

      if (item) {
        item.quantity = quantity; // Update the item's quantity
      }
    },
  },
});

// Export the actions to be dispatched from the component
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in the store
export default CartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // Initialize items as an empty array
  },
  reducers: {
    // Adds a new item to the cart or updates the quantity if it already exists
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        // If item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Removes an item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter((cartItem) => cartItem.name !== itemName);
    },

    // Updates the quantity of an existing item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.name === name);

      if (existingItem && quantity > 0) {
        // Update the item's quantity if it exists and the quantity is greater than 0
        existingItem.quantity = quantity;
      } else if (existingItem && quantity === 0) {
        // Remove the item if quantity is set to 0
        state.items = state.items.filter((cartItem) => cartItem.name !== name);
      }
    }
  }
});

// Exporting the actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporting the reducer
export default CartSlice.reducer;

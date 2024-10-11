import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}, // Initialize items as an empty object to track items by name or ID
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      // Check if the item already exists in the cart
      if (state.items[item.name]) {
        // If it exists, increment the quantity
        state.items[item.name].quantity += 1;
      } else {
        // If it doesn't exist, add the item to the cart with quantity 1
        state.items[item.name] = { ...item, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      const itemName = action.payload;

      // Remove the item from the cart if it exists
      if (state.items[itemName]) {
        delete state.items[itemName];
      }
    },
    updateQuantity: (state, action) => {
      const { itemName, quantity } = action.payload;

      // Update the quantity of an existing item
      if (state.items[itemName]) {
        state.items[itemName].quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

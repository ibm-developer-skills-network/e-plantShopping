import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart.
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex !== -1) {
        // If found, increment its quantity.
        state.items[itemIndex].quantity += 1;
      } else {
        // If not, add the new item with a quantity of 1.
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Remove the item from the cart based on its name.
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      // Extract the name and new quantity from the payload.
      const { name, quantity } = action.payload;
      // Find the item and update its quantity if it exists.
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

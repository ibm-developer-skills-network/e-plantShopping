
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Cart items will be stored here
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1; // Increase quantity if the item already exists
      } else {
        state.items.push(action.payload); // Add new item to the cart
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity; // Update the quantity of the specific item
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

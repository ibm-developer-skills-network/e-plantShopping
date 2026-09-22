import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // cart items stored globally
  },

  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check if the item already exists
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // increase quantity
        existingItem.quantity++;
      } else {
        // add new with quantity = 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity of 1
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item && quantity > 0) {
        item.quantity = quantity; // Update quantity if valid
      } else if (item && quantity === 0) {
        state.items = state.items.filter(item => item.name !== name); // Remove item if quantity is zero
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0 // Initialize totalQuantity
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        state.totalQuantity += quantity - item.quantity; // Update totalQuantity
        item.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === name);
      if (itemIndex > -1) {
        state.totalQuantity -= state.items[itemIndex].quantity; // Update totalQuantity
        state.items.splice(itemIndex, 1);
      }
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity += 1;
      }
    }
  }
});

export const { updateQuantity, removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;



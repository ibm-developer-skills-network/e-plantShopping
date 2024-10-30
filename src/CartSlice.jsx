import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// CartSlice.js
const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++; // Update the total quantity
    },
    removeItem(state, action) {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity; // Deduct the quantity
        state.items = state.items.filter(item => item.name !== action.payload.name);
      }
    },
    updateQuantity(state, action) {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        state.totalQuantity += action.payload.quantity - existingItem.quantity; // Adjust total quantity
        existingItem.quantity = action.payload.quantity;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.name !== action.payload.name);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export default cartSlice.reducer;

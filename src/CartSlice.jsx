import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.name === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(item => item.name !== action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        const quantityDifference = quantity - itemToUpdate.quantity;
        state.totalQuantity += quantityDifference;
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export const selectTotalQuantity = state => state.cart.totalQuantity;
export const selectCartItems = state => state.cart.items;
export default CartSlice.reducer;


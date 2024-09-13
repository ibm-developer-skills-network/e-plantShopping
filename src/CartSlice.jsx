import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { payload } = action
      state.items.push({
        ...payload,
        quantity: 1
      });
    },
    removeItem: (state, action) => {
      const { name } = action.payload
      state.items = state.items.filter(el => el.name !== name);
    },
    updateQuantity: (state, action) => {
      const { item, type } = action.payload;
      const existingItem = state.items.find(el => el.name === item.name);

      if (existingItem) {
        if (type === 'inc') {
          existingItem.quantity += 1;
        } else if (type === 'dec') {
          existingItem.quantity = Math.max(existingItem.quantity - 1, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

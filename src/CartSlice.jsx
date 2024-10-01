import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(
        ({ name: iname }) => iname === name
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      CartSlice.caseReducers.updateTotalQuantities(state, action);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
      CartSlice.caseReducers.updateTotalQuantities(state, action);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(
        ({ name: iname }) => iname === name
      );
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
      CartSlice.caseReducers.updateTotalQuantities(state, action);
    },
    updateTotalQuantities: (state, _) => {
      state.totalQuantity = state.items.reduce(
        (accum, curr) => accum + (curr?.quantity || 0),
        0
      );
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

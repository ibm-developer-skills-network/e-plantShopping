import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0, 
  totalAmount: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalAmount = calculateTotalAmount(state.items);
    },
    removeItem: (state, action) => {
      const name = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === name);
      if (itemIndex > -1) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
        state.totalAmount = calculateTotalAmount(state.items);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        state.totalQuantity += quantity - itemToUpdate.quantity;
        itemToUpdate.quantity = quantity;
        state.totalAmount = calculateTotalAmount(state.items);
      }
    }
  }
});

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => {
    return total + (item.quantity * item.cost);
  }, 0);
};

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;







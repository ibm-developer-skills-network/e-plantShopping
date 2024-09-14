import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Initialize with an empty array
};
const CartSlice = createSlice({
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
},
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
const { name, quantity } = action.payload;
const itemToUpdate = state.items.find(item => item.name === name);
if (itemToUpdate) {
  itemToUpdate.quantity = quantity;
}
    
    },
  },
);

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost} = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const { name, image, cost} = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity--;
      }
    },
    increaseQuantity: (state, action) => {
      const { name, image, cost} = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    // Read-only property -> Cannot get with action.payload
    // -> Replace with Increase, Decrease Quantity Reducer
    updateQuantity: (state, action) => {
      const { name, image, cost, quantity } = action.payload; // Cannot get quantity with action.payload
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = CartSlice.actions;

export default CartSlice.reducer;

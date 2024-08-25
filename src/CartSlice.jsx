import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
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
    removeItem: (state, action) => {
        const { name, image, cost, quantity } = action.payload;
        state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    },
    increaseQuantity(state, action) {
        const { name, quantity } = action.payload;
        const itemToIncrease = state.items.find(item => item.name === name);
        if (itemToIncrease) {
          itemToIncrease.quantity += 1;
        }
      },
    decreaseQuantity(state, action) {
        const { name, quantity } = action.payload;
        const itemToDecrease = state.items.find(item => item.name === name);
        if (itemToDecrease && itemToDecrease.quantity > 1) {
          itemToDecrease.quantity -= 1;
        }
      },

  },
});

export const { addItem, removeItem, updateQuantity, increaseQuantity, decreaseQuantity } = CartSlice.actions;

export default CartSlice.reducer;

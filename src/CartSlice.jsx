import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItems: 0
    
  },
  reducers: {
    addItem: (state, action) => {
    const {name, image, cost} = action.payload;
    const existingItem = state.items.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      state.items.push({ name, image, cost, quantity: 1 });
    }
    state.totalItems++;
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      const itemToRemove = state.items.find(item => item.name === name);

      if (itemToRemove) {
        state.totalItems -= itemToRemove.quantity;  
        state.items = state.items.filter(item => item.name !== name);
      }
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate){
        state.totalItems += (quantity - itemToUpdate.quantity);
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const selectTotalItems = state => state.cart.totalItems;

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;

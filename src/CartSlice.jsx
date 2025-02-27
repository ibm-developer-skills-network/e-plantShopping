import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log(state.items.name);
      console.log(action);
      console.log(action.payload);
      const {name,image,cost} = action.payload;
      console.log(name);
      const existingItem = state.items.find(item => item.name ===name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({name, image, cost, quantity :1});
      }
      state.totalQuantity += 1;
    
    },
    removeItem(state, action) {
      const itemToRemove = action.payload;
      const existingItem = state.items.find(item => item.name === itemToRemove.name);
    
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity; // Subtract the full quantity of the item
        state.items = state.items.filter(item => item.name !== itemToRemove.name); // Remove the item
      }
    },
    
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      console.log(action.payload);
      console.log(quantity);
      console.log(name);
      const itemToUpdate = state.items.find(items => items.name === name);
      console.log(state.items)
      if (itemToUpdate) {
        state.totalQuantity += quantity - itemToUpdate.quantity;
        itemToUpdate.quantity = quantity;
      }    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
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
      // console.log(state.items = state.items.filter(item => item.name !== action.payload))
      state.items = state.items.filter(item => item.name !== action.payload.name);

    },
    increaseUpdateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    DecresUpdateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, increaseUpdateQuantity,items,DecresUpdateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;

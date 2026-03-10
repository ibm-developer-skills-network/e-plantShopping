import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
     const item=action.payload;
     const existingItem=state.items.find((i)=>i.name===item.id);
      if(existingItem){
        existingItem.quantity++;
      }else{
        state.items.push({...item,quantity:1});
      }
    },
    removeItem: (state, action) => {
      const item=action.payload;
      const existingItem=state.items.find((i)=>i.name===item.name);
      if(existingItem){
        state.items=state.items.filter((i)=>i.name!==item.name);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      item.quantity = quantity;
      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.name !== name);
      }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;

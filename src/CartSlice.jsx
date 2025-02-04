import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItems = state.items.find(item => item.name === name);
        if (existingItems)
        {
            existingItems.quantity++;
        }
        else
        {
            state.items.push({name, image, cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter (item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;  // Fix: Get quantity from payload
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;  // Fix: Correct reference
        }
    },
    
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

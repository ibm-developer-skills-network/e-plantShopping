
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const isThere = state.items.find((item) => item.name === action.payload.name);
      if (isThere){
        isThere.quantity += 1;
      }else{
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const isThere = state.items.find((item) => item.name === name);
      if (isThere){
        isThere.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

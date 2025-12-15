import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log("ACTION:", action);
      console.log("Before:", state.items);

      const { name }  =  action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if(existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
        console.log("After:", state.items);
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
       console.log("removeItem:", state.items);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemUppdate = state.items.find(item => item.name === name);
      if(itemUppdate) {
        itemUppdate.quantity = quantity;
      }
       console.log("updateQuantity:", state.items);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

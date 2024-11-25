import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItems: 0
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if(existingItem){
       existingItem.quantity++;
       state.totalItems = state.totalItems + 1;
      }
      else{
        state.items.push({ name, image, cost, quantity: 1 });
        state.totalItems = state.totalItems + 1;

      }
    
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      const index = state.items.findIndex(item => item.name === name);
      if(index > -1){
        state.totalItems = state.totalItems - (state.items[index].quantity);
        state.items.splice(index, 1);
       
      }

    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const index = state.items.findIndex(item => item.name === name);
      if (index > -1) {
        const oldQuantity = state.items[index].quantity;
        state.items[index].quantity = quantity;
        state.totalItems = state.totalItems - oldQuantity + quantity; // Met à jour totalItems correctement
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
     
      const existingItem = state.items.find(item => item === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity; // Update the item's quantity
        } else {
          // If quantity is 0 or less, remove the item from the cart
          state.items = state.items.filter(item => item.name !== name);
        }
      }

    
    },

    clearCart(state) {
      state.items = [];
    },


    
        
   


  },
});

export const { addItem, removeItem, clearCart, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
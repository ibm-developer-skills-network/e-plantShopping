import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure product details from action payload
      const existingItem = state.items.find((item) => item.name === name); // Check if the item already exists in the cart
      if (existingItem) {
        existingItem.quantity += 1; // If it exists, increment the quantity
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // If not, add the new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      // eslint-disable-next-line no-unused-vars
      const itemName = action.payload; // Get the name of the item to be removed from action payload 
      state.items = state.items.filter((item) => item.name !== itemName); // Remove item by filtering it out
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure name and new quantity from action payload
      const itemToUpdate = state.items.find(item => item.name === name); // Find the item to update
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity if the item exists
      }
  
    }
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // Initialize items as an empty array to store cart items
  },
  reducers: {
    // Reducer to add a new item or increase the quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is new to the cart, add it with a quantity of 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Reducer to remove an item from the cart based on its name
    removeItem: (state, action) => {
      const itemName = action.payload;
      // Remove the item with the specified name
      state.items = state.items.filter(item => item.name !== itemName);
    },

    // Reducer to update the quantity of an existing item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      
      // Find the item with the specified name
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // Update the item's quantity to the new quantity
        existingItem.quantity = quantity;
      }
    }
  }
});

// Exporting the action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporting the reducer as the default export for the store
export default CartSlice.reducer;

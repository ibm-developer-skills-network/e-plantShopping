import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0, // Initialize totalQuantity
  totalAmount: 0, // Initialize totalAmount for tracking total cost
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
      state.totalQuantity++; // Update totalQuantity
      state.totalAmount = calculateTotalAmount(state.items); // Update totalAmount
    },
    removeItem: (state, action) => {
      const name = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === name);
      if (itemIndex > -1) {
        state.totalQuantity -= state.items[itemIndex].quantity; // Update totalQuantity
        state.items.splice(itemIndex, 1); // Remove item from array
        state.totalAmount = calculateTotalAmount(state.items); // Update totalAmount
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        state.totalQuantity += quantity - itemToUpdate.quantity; // Update totalQuantity
        itemToUpdate.quantity = quantity; // Update item quantity
        state.totalAmount = calculateTotalAmount(state.items); // Update totalAmount
      }
    }
  }
});

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => {
    return total + (item.quantity * item.cost);
  }, 0);
};

// Export the action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as the default export
export default cartSlice.reducer;







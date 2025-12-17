import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
  const { name, image, cost } = action.payload; // Destructure product details from the action payload
  // Check if the item already exists in the cart by comparing names
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    // If item already exists in the cart, increase its quantity
    existingItem.quantity++;
  } else {
    // If item does not exist, add it to the cart with quantity 1
    state.items.push({ name, image, cost, quantity: 1 });
  }
},
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
// Find the item in the cart that matches the given name
const itemToUpdate = state.items.find(item => item.id === id);
if (itemToUpdate) {
  itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
}
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
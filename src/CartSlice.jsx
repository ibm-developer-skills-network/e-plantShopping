import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      {
        name: "Snake Plant",
        image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        cost: 15,
        quantity: 1
      },
      {
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cost: 20,
        quantity: 2
      }
    ], // Initialize items with default items
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      console.log('Adding item:', action.payload); // Log the payload
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
        console.log('Item exists, new quantity:', existingItem.quantity); // Log the new quantity
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
        console.log('Item added:', { name, image, cost, quantity: 1 }); // Log the added item
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

export const selectTotalAmount = (state) => {
  return state.cart.items.reduce((total, item) => total + item.cost * item.quantity, 0);
};
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
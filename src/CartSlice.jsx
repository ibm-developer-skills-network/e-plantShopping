import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        console.log('Action received in reducer:', action); // Debug action
        const { name, image, description, cost } = action.payload || {}; // Extract payload
        if (!name || !image || !description ||!cost) {
          console.error('Invalid payload in reducer');
          return;
        }
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, description,cost, quantity: 1 });
        }
      },
    removeItem: (state, action) => {
        const name= action.payload;
        state.items = state.items.filter(item => item.name !== name);
        
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
const itemToUpdate = state.items.find(item => item.name === name);
if (itemToUpdate) {
  itemToUpdate.quantity = quantity;
}
    
    },
  },
});
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

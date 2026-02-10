import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.id === plant.name);
      if (!existingItem) {
        state.items.push({ id: plant.name, plant, quantity: 1 }); // Add new item with quantity 1
      }
      
    },
    removeItem: (state, action) => {
      const plant = action.payload;
      state.items = state.items.filter(item => item.id !== plant.name);
    },
    updateQuantity: (state, action) => {
      const plant = action.payload;
      const item = state.items.find(item => item.id === plant.name);
      if (item) {
        item.quantity ++;
      }
    },
    decrementQuantity: (state, action) => {
      const plant = action.payload;
      const item = state.items.find(item => item.id === plant.name);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    }
  },
  
});
export const { addItem, removeItem, updateQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;

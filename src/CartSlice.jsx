import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },

  reducers: {

    // ✅ ADD ITEM
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === name
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    // ❌ REMOVE ITEM
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // 🔁 UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(
        (item) => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// ✅ Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export reducer
export default CartSlice.reducer;
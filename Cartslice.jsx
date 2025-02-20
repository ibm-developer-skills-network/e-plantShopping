import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to store cart items
  },
  reducers: {
    // 1. ADD ITEM TO CART
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity = 1
      }
    },

    // 2. REMOVE ITEM FROM CART
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
    },

    // 3. UPDATE ITEM QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity; // Update quantity of the item
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export reducer for store.js
export default cartSlice.reducer;

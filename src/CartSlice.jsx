import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, cost, image } = action.payload;
      const existingItem = state.items.find((item) => {
        return item.name === name;
      });
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, cost, image, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const productIndex = state.items.findIndex(
        (item) => item.name == action.payload,
      );
      state.items.splice(productIndex, 1);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const product = state.items.find((item) => item.name == name);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

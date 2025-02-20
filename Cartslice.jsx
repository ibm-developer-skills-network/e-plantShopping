import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload); // Adds the plant to the cart
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;

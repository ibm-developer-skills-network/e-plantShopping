import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { name } = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === name);

      if (itemIndex !== -1) {
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          quantity: state.items[itemIndex].quantity + 1,
        };
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const name = action.payload;

      state.items = state.items.filter(item => item.name !== name);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      if (quantity < 1) {
        state.items = state.items.filter(item => item.name !== name);
      } else {
        const itemIndex = state.items.findIndex(item => item.name === name);

        if (itemIndex !== -1) {
          state.items[itemIndex] = {
            ...state.items[itemIndex],
            quantity,
          };
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

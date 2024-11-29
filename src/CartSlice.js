import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const initialState = {
  items: [], // Array of cart items
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to the cart
    addItem: (state, action) => {
      const { name, cost, image } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, cost, image, quantity: 1 });
      }
    },
    // Remove item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    // Update the quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

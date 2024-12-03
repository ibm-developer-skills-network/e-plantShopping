import { createSlice } from '@reduxjs/toolkit';

// Function to load cart from localStorage
const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

// Function to save cart to localStorage
const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromStorage(), // Initialize items from localStorage
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.name === action.payload.name);

      if (itemIndex === -1) {
        // If the item doesn't exist in the cart, add it
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        // If the item already exists, increase its quantity
        state.items[itemIndex].quantity += 1;
      }

      saveCartToStorage(state.items); // Save to localStorage
    },
    removeItem: (state, action) => {
      // Remove an item from the cart by filtering it out
      state.items = state.items.filter((item) => item.name !== action.payload.name);

      saveCartToStorage(state.items); // Save to localStorage
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.name === name);

      if (itemIndex !== -1 && quantity > 0) {
        // Update the quantity if the item exists and the quantity is valid
        state.items[itemIndex].quantity = quantity;
      } else if (itemIndex !== -1 && quantity === 0) {
        // Remove the item if the quantity is set to 0
        state.items.splice(itemIndex, 1);
      }

      saveCartToStorage(state.items); // Save to localStorage
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

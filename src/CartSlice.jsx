
import { createSlice } from '@reduxjs/toolkit';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },

});
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },
   
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
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

export const selectTotalItems = (state) => {  
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);  
  };

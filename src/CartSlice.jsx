import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload // Destructure product details
        // Check if item already exists in cart by comparing names
        const existingItem = state.items.find(item => item.name === name)
        if (existingItem) {
            // If item already exists in the cart, increase its quantity
            existingItem.quantity++;
        }else{
            // If item does not exist, add it to the cart with quantitiy 1
            state.items.push({name, image, cost, quantity: 1})
        }
        
    },
    removeItem: (state, action) => {
        // Remove the item from the list using splice
        state.items = state.items.filter(item => item.name !== action.payload)
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload
        // Find the item in the cart the cart that matches the given name
        const itemToUpdate = state.items.find(item => item.name === name)
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity // if the item is found, update its quantity to the new value
        }    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

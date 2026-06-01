import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        if (!name) return;
        const existingItem = state.items.find(item =>item.name === name);
        if(existingItem){
            alert("Ce produit est déjà dans votre panier.");
        }else{
            state.items.push({name,image,cost,quantity:1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        if (!name) return;
        const findItem = state.items.find(item => item.name === name);
        if (findItem){
            findItem.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const {name,img,cost} = action.payload;
    //check if the itemis already exists in the cart
    const exisistingItem = state.items.find(item => item.name === name);
    if(exisistingItem){
        //if exists true
        exisistingItem.quantity++;
    }else{
        state.items.push({name,img,cost,quantity:1})
    }
    },
    removeItem: (state, action) => {
        const exisitingItem = state.items.filter(item => item.name !== action.payload);        
    },
    updateQuantity: (state, action) => {
        const {name,quantity} = action.payload;
        const updatingItem = state.items.find(item => item.name === name);
        if(updatingItem){
            updatingItem.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

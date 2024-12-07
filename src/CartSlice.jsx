import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  //Puccetti Nicola ...for this isn't used state directly
  //but is a first test 
  reducers: {
    addItem: (state, action) => {
        const existingItem = state.items.find((item)=> item.name === action.payload.name);
        if(existingItem){
            existingItem.quantity += 1;
        }
        else{
            existingItem.items = state.items.push({...action.payload, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        const existingItem = state.items.find((item)=> item.name === action.payload.name);
        if(existingItem){
            existingItem.items = state.items.filter((item)=> item.name !== action.payload.name);
        }
        else{
            return console.log("error when removing items from cart")
        }
    },
    updateQuantity: (state, action) => {
        const {name,quantity} = action.payload;
        const itemToUpdate = state.items.find((item)=>item.name === name);
        if(itemToUpdate){
            itemToUpdate.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export const cartReducer = CartSlice.reducer;

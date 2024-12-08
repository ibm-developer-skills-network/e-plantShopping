import { createSlice } from '@reduxjs/toolkit';

const initialState={
    items: [], // Initialize items as an empty array
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
//Puccetti Nicola implemented increment and decrement with two way  
  reducers: {
    addItem: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        if(existingItem){
            existingItem.quantity += 1;
            return console.log("into the if by addItem Function");
        }
        else{
            state.items.push({...action.payload, quantity: 1});
            return console.log("into the else by addItem Function");
        }
    },
    removeItem: (state, action) => {
        const existingItem = state.items.find((item)=> item.name === action.payload.name);
        if(existingItem){
            state.items = state.items.filter((item)=> item.name !== action.payload.name);
        }
        else{
            return console.log("error when removing items from cart");
        }
    },
    updateQuantity: (state, action) => {
        const {name,quantity} = action.payload;
        const itemToUpdate = state.items.find((item)=>item.name === name);
        //const newQuantity = 1 + quantity;// a secnd way to increment value
        if(itemToUpdate){
            itemToUpdate.quantity= quantity //= newQuantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export const cartReducer = CartSlice.reducer;

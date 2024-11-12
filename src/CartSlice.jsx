import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  
  reducers: {
    addItem: (state, action) => {

      const existingItem = state.items.find((item)=> item.name===action.payload.name)
     if(!existingItem){
     
      state.items.push({...action.payload,quantity: 1})
     }
       else{  
      existingItem.quantity+=1;
         
      }
     
      // console.log(existingItem);
     
    },
    removeItem: (state, action) => {
      
      state.items = state.items.filter(item=> item.name!==action.payload)
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        if(quantity===0){
          state.items = state.items.filter(item=> item.name !==name)
        }
        else{
          itemToUpdate.quantity = quantity;
        }
      }
      
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
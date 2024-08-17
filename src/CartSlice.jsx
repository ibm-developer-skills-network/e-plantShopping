import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {payload} = action                 
        state.items.push({
          ...payload , 
          quantity : 1
        });
    },
    removeItem: (state, action) => {
      const {name} = action.payload
       state.items = state.items.filter(el => el.name !== name);
    },
    updateQuantity: (state, action) => {
      const {item , type} = action.payload
      switch(type){
        case 'inc' : 
          state.items = state.items.map(el => el.name === item.name ?  {...el , quantity : el.quantity + 1 } : el );
          break;
        case 'dec' : 
          state.items = state.items.map(el => el.name === item.name ?  {...el , quantity : el.quantity > 1 ? el.quantity - 1 : 1 } : el );
          break;
        default :
          return;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

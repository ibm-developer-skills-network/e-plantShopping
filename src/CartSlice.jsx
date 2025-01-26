import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQty: 0, //Initalize total qty to 0
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
            state.totalQty+= 1;
        }
    },
    removeItem: (state, action) => {
        const {name} = action.payload;
        console.log("rem:",name, action.payloadS)
        return {...state, items: state.items.filter(item => item.name !== name), totalQty: state.totalQty - 1};
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        return {...state, items:state.items.map(item => item.name === name ?
        {...item, quantity: quantity} : item)};
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

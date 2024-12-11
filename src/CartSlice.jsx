import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existItem = state.items.find(item => item.name === name);

        if(existItem)
            existItem.quantity++;
        else
            state.items.push({name, image, cost, quantity: 1});
    },
    removeItem: (state, action) => {
        const { name } = action.payload;
        state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const { name } = action.payload.item;
        const isPlus = action.payload.plus;
        const itemToUpdate = state.items.find(item => item.name === name);

        if(itemToUpdate)
            isPlus ? itemToUpdate.quantity++ : itemToUpdate.quantity--;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        console.log("CartSlice: addItem reducer start");
        console.log(state);
        console.log(action);
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            console.log("if...");
            existingItem.quantity++;
            console.log(existingItem.quantity);
        } else {
            console.log("else...");
            state.items.push({ name, image, cost, quantity: 1 });
            state.items.forEach((item) => {
                console.log(item);
            });
        }
        console.log("CartSlice: addItem reducer finish")
    },
    removeItem: (state, action) => {
        console.log("CartSlice: removeItem reducer start");
        console.log(state);
        console.log(action);
        state.items = state.items.filter(item => item.name !== action.payload);        
        console.log("CartSlice: removeItem reducer finish");
    },
    updateQuantity: (state, action) => {
        console.log("CartSlice: updateQuantity reducer start");
        console.log(state);
        console.log(action);
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }    
        console.log("CartSlice: updateQuantity reducer finish");
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

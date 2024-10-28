import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
        productStatus: {},
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            }
            else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
            state.productStatus[name] = true; // 更新狀態為已添加
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name)
            state.productStatus[action.payload.name] = false; // 更新狀態為未添加
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
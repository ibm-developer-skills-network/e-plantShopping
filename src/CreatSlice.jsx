import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        console.log(state.items)
        const existingItem = state.items.find(item => item.name === action.payload.name)
            if (existingItem){
                existingItem.quantity += 1
            }
            else{
                state.items.push({...action.payload, quantity:1})
                
            }
            state.totalItemsCount = (state.totalItemsCount || 0) + 1;
    
    },
    removeItem: (state, action) => {
        const itemToremove = state.items.find(item=> item.name === action.payload.name)
        state.totalItemsCount = state.totalItemsCount - itemToremove.quantity;
        state.items = state.items.filter(item => item.name !== action.payload.name)
        

    },
    updateQuantity: (state, action) => {
    
    },

    increaseItemQuantity(state, action){
        const itemToIncrease = state.items.find(item=> item.name === action.payload.name)
        if (itemToIncrease){
            itemToIncrease.quantity += 1
            state.totalItemsCount = state.totalItemsCount + 1;
            
        }
    },

    decreaseItemQuantity(state, action){
        const itemToDecrease = state.items.find(item => item.name === action.payload.name)
        if (itemToDecrease && itemToDecrease.quantity > 1){
            itemToDecrease.quantity -= 1;
            state.totalItemsCount = state.totalItemsCount - 1;
            
        }
    },
    clearItems(state){
        state.items = []
    }
  },
});

export const { addItem, removeItem, updateQuantity, increaseItemQuantity, decreaseItemQuantity } = CreatSlice.actions;
export default CreatSlice.reducer;

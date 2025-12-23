import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
    // Define the root reducer object
    reducer: {
        // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
    },
});


const dispatch = useDispatch();

const handleIncrement = (item) => {
    dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
    }));
};

const handleDecrement = (item) => {
    if (item.quantity > 1) {
        dispatch(updateQuantity({
            name: item.name, 
            quantity: item.quantity - 1
        }));
    } else {
        dispatch(removeItem(item.name));
    }
};

const handleReomve = (item) => {
    dispatch(removeItem(item.name));
};

function calculateTotalCost(item) {
    const unitPrice = parseFloat(item.cost.substring(1)); // Extract numeric value from cost string like "$10.00"
    const totalCost = unitPrice * item.quantity; // Mulitpy unit price by quantity
    return totalCost;
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; // Destructive product details from the action payload
        // Check if the item already exists in the cart by comparing names
        const existingItem = state.items.find(item => item.name === name);
        if (exisitingItem) {
            // If item already exists in the cart, increase its quantity
            existingItem.quantity++;
        } else {
            // If item does not exist, add it to the cart with quantity 1
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Destructure the porduct name and new quantity from the action payload.
        // Find the item in the cart that matches the given name
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
        }
    },
  },
});


export default CartSlice.reducer;

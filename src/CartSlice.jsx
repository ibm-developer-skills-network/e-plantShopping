import { createSlice } from '@reduxjs/toolkit';

// Helper function to calculate the total quantity of all items in the cart
const calculateTotalQuantity = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

// Helper function to calculate the total cost of all items in the cart
const calculateTotalPrice = (items) => {
  // Ensure the cost is fixed to two decimal places
  return items.reduce((total, item) => total + (item.unitPrice * item.quantity), 0).toFixed(2);
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of unique products in the cart
    totalQuantity: 0, // Total number of individual items (Task 4: for header display)
    totalPrice: 0.00, // Total cost (Task 3: for cart page display)
  },
  reducers: {
    // Task 1 & 4: Adds an item to the cart
    addItem: (state, action) => {
      const newPlant = action.payload;
      const unitPrice = parseFloat(newPlant.cost.replace('$', '')); 

      const existingItem = state.items.find(item => item.name === newPlant.name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          id: newPlant.name,
          name: newPlant.name,
          image: newPlant.image,
          unitPrice: unitPrice,
          quantity: 1,
        });
      }

      state.totalQuantity = calculateTotalQuantity(state.items);
      state.totalPrice = calculateTotalPrice(state.items);
    },
    
    // Task 3 & 4: Updates item quantity (increment/decrement)
    updateQuantity: (state, action) => {
        const { name, type } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);

        if (itemToUpdate) {
            if (type === 'increment') {
                itemToUpdate.quantity++;
            } else if (type === 'decrement' && itemToUpdate.quantity > 1) {
                itemToUpdate.quantity--;
            } else if (type === 'decrement' && itemToUpdate.quantity === 1) {
                // If quantity is 1 and decremented, remove the item
                state.items = state.items.filter(item => item.name !== name);
            }
            
            state.totalQuantity = calculateTotalQuantity(state.items);
            state.totalPrice = calculateTotalPrice(state.items);
        }
    },
    
    // Task 3 & 4: Removes an item completely
    deleteItem: (state, action) => {
        const nameToDelete = action.payload;
        state.items = state.items.filter(item => item.name !== nameToDelete);

        state.totalQuantity = calculateTotalQuantity(state.items);
        state.totalPrice = calculateTotalPrice(state.items);
    },
  },
});

export const { addItem, updateQuantity, deleteItem } = CartSlice.actions;

export default CartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Agrega un artículo al carrito
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Verifica si el artículo ya existe
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // Si existe, aumenta la cantidad
        existingItem.quantity += 1;
      } else {
        // Si no existe, lo agrega con cantidad 1
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    // Elimina un artículo del carrito por nombre
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },

    // Actualiza la cantidad de un artículo
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

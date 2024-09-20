import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Inicializa items como un array vacío
  },
  reducers: {
    // Función para agregar una planta al carrito
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Asegúrate de incluir la cantidad
      }
    },
    // Función para eliminar una planta del carrito
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    // Función para actualizar la cantidad de plantas en el carrito
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exporta las acciones para usarlas en los componentes
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exporta el reducer por defecto para usar en store.js
export default CartSlice.reducer;

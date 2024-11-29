import { createSlice } from '@reduxjs/toolkit';  
 
export const CartSlice = createSlice({  
  name: 'cart',  
  initialState: {  
    items: [], // Inicializa items como un array vacío  
  },  
  
  reducers: {  
    addItem: (state, action) => {  
      const { id, name, image, cost } = action.payload; // Incluye 'id' en el payload  
      const existingItem = state.items.find(item => item.id === id); // Verifica por ID  

      if (existingItem) {  
        existingItem.quantity++;  
      } else {  
        state.items.push({ id, name, image, cost, quantity: 1 }); // Asegúrate de añadir el id  
      }  
    },  
    
    removeItem: (state, action) => {  
      state.items = state.items.filter(item => item.id !== action.payload); // Usa el ID para eliminar  
    },  

    updateQuantity: (state, action) => {  
      const { id, quantity } = action.payload; // Incluye ID en la acción  
      const itemToUpdate = state.items.find(item => item.id === id); // Busca por ID  
      
      if (itemToUpdate) {  
        itemToUpdate.quantity = quantity;  
      }  
    },  
  },  
});  

// Exportar las acciones  
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;  

// Exportar el reducer  
export default CartSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
dispatch(addItem(product));
dispatch(removeItem(item.name));
 const store = configureStore({

    reducer: {
        cart: cartReducer,
    },
});

const calculateTotalQuantity = () => {
 return CartItems ? CartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

export default store

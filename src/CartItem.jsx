import React from 'react';  
import { useSelector, useDispatch } from 'react-redux';  
import { removeItem, updateQuantity } from './CartSlice';  
import './CartItem.css';  

const CartItem = ({ onContinueShopping }) => {  
  const cart = useSelector(state => state.cart.items);  
  const dispatch = useDispatch();  

  const calculateTotalAmount = () =>  
    cart.reduce((total, item) => total + item.cost * item.quantity, 0);  
  
  const handleIncrement = (item) => {  
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));  
  };  
  
  const handleDecrement = (item) => {  
    if (item.quantity > 1) {  
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));  
    } else {  
      dispatch(removeItem(item.id));  
    }  
  };  
  
  const handleRemove = (item) => {  
    dispatch(removeItem(item.id));  
  };  
  
  const calculateTotalCost = (item) => (item.cost * item.quantity).toFixed(2);  // Calcular total del artículo  
  
  return (  
    <div className="cart-container">  
      <h2>Total Amount: ${calculateTotalAmount().toFixed(2)}</h2>  
      <div>  
        {cart.map(item => (  
          <div className="cart-item" key={item.id}>  
            <img className="cart-item-image" src={item.image} alt={item.name} />  
            <div>{item.name}</div>  
            <div>Unit Price: ${item.cost.toFixed(2)}</div>  
            <div>  
              <button onClick={() => handleDecrement(item)}>-</button>  
              {item.quantity}  
              <button onClick={() => handleIncrement(item)}>+</button>  
            </div>  
            <div>Subtotal: ${calculateTotalCost(item)}</div>  
            <button onClick={() => handleRemove(item)}>Delete</button>  
          </div>  
        ))}  
      </div>  
      <button onClick={onContinueShopping}>Continue Shopping</button>  
    </div>  
  );  
};  

export default CartItem;
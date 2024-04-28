// CartItem.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity
  const calculateTotalCost = () => {
    return item.quantity * parseFloat(item.cost.substring(1));
  };

  return (
    <div className="cart-item">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-cost">{item.cost}</div>
        <div className="cart-item-quantity">
          <button className="cart-item-button cart-item-button-dec" onClick={handleDecrement}>-</button>
          <span className="cart-item-quantity-value">{item.quantity}</span>
          <button className="cart-item-button cart-item-button-inc" onClick={handleIncrement}>+</button>
        </div>
        <div className="cart-item-total">Total: ${calculateTotalCost()}</div> {/* Display total cost */}
        <button className="cart-item-delete" onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;

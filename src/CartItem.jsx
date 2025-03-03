import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItems() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const itemCost = parseFloat(item.cost.substring(1)); // Remove '$' and convert to float
      return total + itemCost * item.quantity;
    }, 0);
  };

  const calculateItemSubtotal = (item) => {
    const itemCost = parseFloat(item.cost.substring(1)); // Remove '$' and convert to float
    return itemCost * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    // Trigger action to show product list
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
      
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.cost}</p>
              <div className="item-actions">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </div>
              <p>Subtotal: ${calculateItemSubtotal(item).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-total">
        <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartItems;



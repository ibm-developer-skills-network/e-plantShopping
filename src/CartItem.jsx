import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () =>
    cart.reduce((sum, item) => sum + item.cost * item.quantity, 0).toFixed(2);

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

  const handleRemove = (item) => dispatch(removeItem(item.name));

  const calculateTotalCost = (item) => (item.cost * item.quantity).toFixed(2);

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-cost">${item.cost}</div>

            <div className="cart-item-quantity">
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>

            <div className="cart-item-total">
              Total: ${calculateTotalCost(item)}
            </div>

            <button className="cart-item-delete" onClick={() => handleRemove(item)}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button onClick={() => alert('Checkout functionality coming soon')}>
        Checkout
      </button>
    </div>
  );
};

export default CartItem;

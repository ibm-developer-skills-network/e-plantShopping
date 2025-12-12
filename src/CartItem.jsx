import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    if (!cart || cart.length === 0) return '0.00';
    const total = cart.reduce((sum, it) => {
      const price = Number(String(it.cost).replace(/[^0-9.]/g, '')) || 0;
      const qty = Number(it.quantity) || 0;
      return sum + price * qty;
    }, 0);
    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) onContinueShopping();
  };



  const handleIncrement = (item) => {
    if (!item) return;
    const newAmount = (Number(item.quantity) || 0) + 1;
    dispatch(updateQuantity({ name: item.name, amount: newAmount }));
  };

  const handleDecrement = (item) => {
    if (!item) return;
    const current = Number(item.quantity) || 0;
    if (current <= 1) {
      // remove item when decrementing from 1
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, amount: current - 1 }));
    }
  };

  const handleRemove = (item) => {
    if (!item) return;
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    if (!item) return '0.00';
    const price = Number(String(item.cost).replace(/[^0-9.]/g, '')) || 0;
    const qty = Number(item.quantity) || 0;
    return (price * qty).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total =0;
    cart.forEach(item => {
      const cost = parseFloat(item.cost.substring(1));
      return total + cost * item.quantity;
    }, 0);
    return total;
  };

  const handleContinueShopping = (e) => { 
    // Call the callback passed from the parent if it's provided
    if (typeof onContinueShopping === 'function') {
      onContinueShopping(e);
    } else {
      // Fallback: log a warning so it's clear why nothing happened
      // (keeps behavior safe if parent didn't provide the prop)
      // eslint-disable-next-line no-console
      console.warn('onContinueShopping prop not provided or not a function');
    }
  };



  const handleIncrement = (item) => {
    // Increase the item's quantity by 1
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
  };

  const handleDecrement = (item) => {
    // Decrease the item's quantity by 1, or remove if it reaches 0
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
    } else {
      // If quantity would go to 0, remove the item from cart
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    // Remove the item from the cart using its name as the identifier
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    if (!item) return '0.00';
    const cost = parseFloat(item.cost.substring(1));
    const total = cost * item.quantity;
    // Return a string with two decimal places (e.g., 12.50)
    return total.toFixed(2);
  };
  //const handleCheckoutShopping = (e) => {
  //alert('Functionality to be added for future reference');
//};
const calculateTotalQuantity = () => {
  return CartItems ? CartTiems.reduce((total,item) =>total + item.quantity,0):0;
}

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>
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
  CartItem.propTypes = {
    onContinueShopping: PropTypes.func.isRequired,
  };
};

export default CartItem;



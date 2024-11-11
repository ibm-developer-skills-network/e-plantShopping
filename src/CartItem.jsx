import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 1-Cost of all items in cart
   const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + Number(item.cost.substring(1)) * item.quantity, 0);
  };

  // 2-Continue shopping
   const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  // 3-Checkout
  const handleCheckoutShopping = (e) => {
    alert("Functionality to be added for future reference");
  };

  // 4a-Increment
  const handleIncrement = (item) => {
     dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // 4b-Decrement
  const handleDecrement = (item) => {
    const updatedQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
    dispatch(updateQuantity({ name: item.name, quantity: updatedQuantity }));
  };

  // 5-Remove plant from the cart
  const handleRemove = (item) => {
     dispatch(removeItem(item));
  };

  // 6-Item subtotal
   const calculateTotalCost = (item) => {
    return Number(item.cost.substring(1)) * item.quantity;
  };

   return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Plants : {cart.length}</h2>
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-name">{item.name}</div>
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
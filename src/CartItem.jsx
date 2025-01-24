import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart, updateQuantity  } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + Number(item.cost.substring(1)) * item.quantity, 0);
};

  
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };


  

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    const newQuantity = item.quantity + 1; // Increment the quantity 
    dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
  };

  const handleDecrement = (item) => {
    const newQuantity = item.quantity - 1; // Decrement the quantity
    if (newQuantity > 0) {
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity })); // Update
    } else {
      dispatch(removeItem(item.name)); // Remove the item if quanity is 0
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  
  // Calculate total cost for an individual item
  const calculateTotalCost = (item) => {
    
    return Number(item.cost.substring(1)) * item.quantity;
  
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
              <button className="cart-item-delete" onClick={() => handleClearCart()}>Clear Cart</button>
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
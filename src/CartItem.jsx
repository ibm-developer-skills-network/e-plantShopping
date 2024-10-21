import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
// Calculate total number of items contained in cart
  const numItems = () => {cart.reduce((total,item) => total + item.quantity,0);

}

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {cart.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  const handleContinueShopping = (e) => {
  
e.preventDefault();
setShowPlants(true);
setShowCart(false);
  };

  const handleCheckoutShopping = (e) => {
    alert ('this function will be deployed at some later time!')
    
  };



  const handleIncrement = (item) => {
   
    item.quantity++;
    dispatch(updateQuantity(item));
    
    
  };

  const handleDecrement = (item) => {
   
    if (item.quantity >0) {item.quantity = item.quantity-1};
    dispatch(updateQuantity(item));
   
  };

  const handleRemove = (item) => {
    if (item.quantity > 0) {
    dispatch(removeItem(item))};
   
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => { 
    item.quantity
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount(cart)}</h2>
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
        <button className="get-started-button1"onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    const totalAmount = cart.map(item => 
      calculateTotalCost(item)).reduce((total, itemTotal) => total + itemTotal, 0);
      return totalAmount;
  };

  const handleContinueShopping = () => {
      onContinueShopping();
  };

  const handleIncrement = (item) => {
      dispatch(updateQuantity(
        {name: item.name,
         quantity: item.quantity + 1,
        }
        ));
  };

  const handleDecrement = (item) => {
      if (item.quantity > 1) {  
          dispatch(updateQuantity(
        {name: item.name,
         quantity: item.quantity - 1,
        }
        )); 
      } else {
        dispatch(removeItem(item.name));
      }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    window.alert('Checkout is coming soon.');
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return parseFloat(item.cost.substring(1)) * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <h2 style={{ color: 'black' }}>Number of Cart Items: {cartItemCount}</h2>
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
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckout}>Checkout - Coming Soon</button>
      </div>
    </div>
  );
};

export default CartItem;



/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

// eslint-disable-next-line react/prop-types
const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
  let total = 0;
  cart.forEach(item => {
    const quantity = item.quantity  || 1; // Default to 1 if quantity is undefined
    const costString = item.cost || '$0'; // Default to '$0' if cost is undefined 
    const costNumber = parseFloat(costString.replace(/[^0-9.]/g,'')); // Remove '$' and convert to number
    const subtotal = costNumber * quantity;
    total += subtotal;
  });
  return total.toFixed(2); // Return total amount rounded to 2 decimal places
  };
// Handle continue shopping button click
  const handleContinueShopping = (e) => {
   if (onContinueShopping) {
    onContinueShopping(e);
   }
   
  };
// Handle checkout button click
  const checkoutShopping = (e) => {
    alert('Functionality to be added in future updates.');
  };

// Increment item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      name: item.name,
      quantity: (item.quantity || 1) + 1
    }));
  };
// Decrement item quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
      name: item.name,
      quantity: (item.quantity || 1) - 1
    }));
  } else {
      dispatch(removeItem(item.name));
    }
  };
// Remove item from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const quantity = item.quantity || 1; // Default to 1 if quantity is undefined
    const costString = item.cost || '$0'; // Default to '$0' if cost is undefined 
    const costNumber = parseFloat(costString.replace(/[^0-9.]/g,'')); // Remove '$' and convert to number
    const totalCost = costNumber * quantity;
     return (costNumber * quantity).toFixed(2); // Return total cost rounded to 2 decimal places
  };
  const calculateTotalQuantity = () => {
    // eslint-disable-next-line no-undef
    return CartItems ? CartItems.rerduce((total, item) => total + item.quantity, 0) : 0;
  }

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
        <button className="get-started-button1" onClick={checkoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
const calculateTotalAmount = () => {
  return cart.reduce((total, item) => {
    // Convert the item cost to a numeric value by removing "$" and parsing it
    const unitCost = parseFloat(item.cost.replace('$', ''));
    // Add the total cost for the current item (unitCost * quantity) to the running total
    return total + unitCost * item.quantity;
  }, 0).toFixed(2); // Return the final result rounded to 2 decimal places
};



  const handleCheckoutShopping = (e) => {
    console.log(" inside handle checkout");
    alert('Functionality to be added for future reference');
  };



  const handleIncrement = (item) => {
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
  };

  // Handle Decrement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
    } else {
      // If quantity is 1, remove the item
      dispatch(removeItem({ name: item.name }));
    }
  };

  const handleRemove = (item) => {
    console.log(" insdie remove item");
    dispatch(removeItem({ name: item.name }));
  };
  // Calculate total cost based on quantity for an item
// Calculate total cost based on quantity for an item
const calculateTotalCost = (item) => {
    console.log(item);
    // Parse the cost to remove the "$" symbol and convert to a number
    const unitCost = parseFloat(item.cost.replace('$', ''));
    return (unitCost * item.quantity).toFixed(2); // Multiply by quantity and fix to 2 decimal places
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
        <button className="get-started-button" onClick={onContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



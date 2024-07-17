import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreateSlice';
import './CartItem.css'; // Assuming you have some CSS for styling

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  console.log(cart)
  const dispatch = useDispatch();

  // Function to parse cost string to a float value
  const parseCost = (costString) => {
    // Remove the dollar sign and any non-numeric characters
    const numericString = costString.replace(/[^0-9.]/g, '');
    return parseFloat(numericString);
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const cost = parseCost(item.cost);
      if (isNaN(cost)) {
        console.error(`Invalid cost for item ${item.name}: ${item.cost}`);
        return total;
      }
      console.log(`Parsed cost for ${item.name}:`, cost); // Debugging statement
      return total + (cost * item.quantity);
    }, 0).toFixed(2);
  };

  // Handle increment action
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrement action
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem({ name: item.name }));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  // Handle remove item action
  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const cost = parseCost(item.cost);
    if (isNaN(cost)) {
      console.error(`Invalid cost for item ${item.name}: ${item.cost}`);
      return "0.00";
    }
    return (cost * item.quantity).toFixed(2);
  };

  // Handle continue shopping action
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  // Handle checkout shopping action (future enhancement)
  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Functionality to be added for future reference');
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
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



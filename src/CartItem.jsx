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
    let total = 0; // Initialize a variable total to hold the cumulative sum
    
    // Iterate over the cart array using cart.forEach()
    cart.forEach((item) => {
      // Convert the cost string (e.g., "$10.00") to a number using parseFloat(item.cost.substring(1)), then multiply it by the quantity.
      const itemCost = typeof item.cost === 'string' ? parseFloat(item.cost.substring(1)) : item.cost;
      total += itemCost * item.quantity; // Add the resulting value to total
    });
    
    return total; // After processing all items, return the final total sum
  };

  const handleContinueShopping = (e) => {
    // In the handleContinueShopping() function, call the onContinueShopping(e) function passed from the parent component.
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    // Dispatch the updateQuantity action to increase the item's quantity by 1.
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    // If the item's quantity is greater than 1, dispatch updateQuantity to decrease the quantity by 1.
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Else if the quantity would drop to 0, dispatch the removeItem action to remove the plant type from the cart.
      dispatch(removeItem(item.name)); // dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    // For the handleRemove() function you need to dispatch the removeItem action to delete the item from the cart.
    dispatch(removeItem(item.name)); // dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    // Extract the numeric value from the item's cost string using parseFloat(item.cost.substring(1)) before performing the multiplication.
    const numericCost = typeof item.cost === 'string' ? parseFloat(item.cost.substring(1)) : item.cost;
    return numericCost * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', margin: '30px 0', fontSize: '18px', color: '#666' }}>Your cart is empty</div>
        ) : (
          cart.map(item => (
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
          ))
        )}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  onContinueShopping: PropTypes.func.isRequired,
};

export default CartItem;
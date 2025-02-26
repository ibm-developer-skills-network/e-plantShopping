import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css'; // Ensure this file contains your non-duplicated CSS styles

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  // Retrieve cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total cost of all items in the cart
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.cost.substring(1)); // Assumes cost is in format "$12.34"
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // Calculate the subtotal for a single cart item
  const calculateItemSubtotal = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  // Increase the quantity of a cart item
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrease the quantity of a cart item, or remove it if quantity would drop below 1
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove the item from the cart
  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  // Return to the product listing
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  // Placeholder checkout function
  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Functionality to be added for future reference');
  };

  // If cart is empty, display a message
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      {cartItems.map((item) => (
        <div key={item.name} className="cart-item">
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image"
          />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>{item.cost}</p>
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
            <p>Total: ${calculateItemSubtotal(item)}</p>
            <button
              className="remove-button"
              onClick={() => handleRemove(item.name)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="cart-actions">
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;

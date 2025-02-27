import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css'; // Ensure this file has your updated card-style CSS

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  // Retrieve cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total cost of all items in the cart
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        // Assumes cost is in format "$12.34"
        const price = parseFloat(item.cost.substring(1));
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

  // Decrease the quantity of a cart item, or remove it if quantity drops below 1
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
      <div className="cart-container empty-cart">
        <h2>Your cart is empty</h2>
        <button
          className="get-started-button1 continue_shopping_btn"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {/* Cart total */}
      <h2 className="total_cart_amount">Total Cart Amount: ${calculateTotalAmount()}</h2>

      {/* Map through each cart item */}
      {cartItems.map((item) => (
        <div key={item.name} className="cart-item">
          {/* Product image */}
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image"
          />

          {/* Product details */}
          <div className="cart-item-details">
            <div>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
            </div>

            <div>
              {/* Quantity controls */}
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              {/* Item subtotal */}
              <div className="cart-item-total">
                Total: ${calculateItemSubtotal(item)}
              </div>

              {/* Remove button */}
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item.name)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Cart actions: Continue Shopping & Checkout */}
      <div className="cart-actions">
        <button
          className="get-started-button1 continue_shopping_btn"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <button
          className="get-started-button1"
          onClick={handleCheckoutShopping}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;

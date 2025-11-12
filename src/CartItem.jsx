import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const quantity = item.quantity;
      const cost = parseFloat(item.cost.replace('$', ''));
      total += quantity * cost;
    });
    return total.toFixed(2);
  };


  const calculateSubtotal = (item) => {
    const quantity = item.quantity;
    const cost = parseFloat(item.cost.replace('$', ''));
    return (quantity * cost).toFixed(2);
  };


  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };


  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };


  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };


  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };


  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your cart is empty 🛒</h2>
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      <div className="cart-items-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />

            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Price: {item.cost}</div>

              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                Subtotal: ${calculateSubtotal(item)}
              </div>

              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <button className="get-started-button1" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

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

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + parseFloat(calculateTotalCost(item)), 0).toFixed(2);
  };

  const handleContinueShoppingClick = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckoutShopping = () => {
    alert('Checkout functionality to be added.');
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Plant</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-img" width={40} height={40} loading="lazy" />
                    <span className="cart-item-name">{item.name}</span>
                  </td>
                  <td>{item.cost}</td>
                  <td className="cart-item-quantity">
                    <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
                  </td>
                  <td>${calculateTotalCost(item)}</td>
                  <td>
                    <button className="cart-item-delete" onClick={() => handleRemove(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h2>Total: ${calculateTotalAmount()}</h2>
            <div className="cart-actions">
              <button className="continue-btn" onClick={handleContinueShoppingClick}>Continue Shopping</button>
              <button className="checkout-btn" onClick={handleCheckoutShopping}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Calculate total amount for all items
  const calculateTotalAmount = () => {
    return cart.items.reduce((total, item) => {
      const price = parseFloat(item.cost.replace('$', ' '));
      return total + price * item.quantity;
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={onContinueShopping}>Continue Shopping</button>
        </div>
      ) : (
        <div>
          <div className="cart-items-list">
            {cart.items.map((item) => {
              const itemPrice = parseFloat(item.cost.replace('$', ''));
              const itemTotal = itemPrice * item.quantity;
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Unit Cost: {item.cost}</p>
                    <p>Total Cost: ${itemTotal.toFixed(2)}</p>
                  </div>
                  <div className="item-actions">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                    <button 
                      className="delete-btn" 
                      onClick={() => handleRemove(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <div className="cart-buttons">
              <button 
                className="continue-shopping-btn" 
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
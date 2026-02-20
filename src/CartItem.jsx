import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total number of plants in the cart
  const totalNumberOfPlants = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((sum, item) => {
      // cost is a string like "$15" → strip the "$"
      const price = Number(item.cost.replace('$', ''));
      return sum + price * item.quantity;
    }, 0);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const price = Number(item.cost.replace('$', ''));
    return price * item.quantity;
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        Total Plants in Cart: {totalNumberOfPlants}
      </h2>
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${totalAmount}</h2>

      <div>
        {cart.length === 0 && (
          <p style={{ color: 'black' }}>Your cart is empty. Add some plants!</p>
        )}

        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
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
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount">
        Total items: {totalNumberOfPlants} | Total cost: ${totalAmount}
      </div>

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
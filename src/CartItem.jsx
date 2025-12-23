import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse cost values like "$12.34" or "12.34" or numeric values
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    if (typeof cost === 'string') {
      const num = parseFloat(cost.replace(/[^0-9.]/g, ''));
      return Number.isNaN(num) ? 0 : num;
    }
    return 0;
  };

  const formatCurrency = (value) => {
    return Number.isFinite(value) ? value.toFixed(2) : '0.00';
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;

    cart.forEach(item => {
      const quantity = Number(item.quantity) || 0;
      const cost = parseCost(item.cost);
      total += quantity * cost;
    });

    return formatCurrency(total);
  };

  const handleContinueShopping = (e) => {
    if (typeof onContinueShopping === 'function') {
      onContinueShopping(e);
    }
  };

  const handleIncrement = (item) => {
    const newQuantity = Number(item.quantity || 0) + 1;
    // dispatch updateQuantity with a payload the slice expects.
    // Common payload shape: { name, quantity } — adjust if your slice expects something else (id, index, etc.)
    dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
  };

  const handleDecrement = (item) => {
    const current = Number(item.quantity || 0);
    if (current <= 1) {
      // If quantity would go to zero, remove the item
      dispatch(removeItem({ name: item.name }));
    } else {
      const newQuantity = current - 1;
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  const handleCheckoutShopping = (e) => {
    // replace with your checkout flow
    alert('Functionality to be added for future reference');
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const quantity = Number(item.quantity) || 0;
    const cost = parseCost(item.cost);
    const total = quantity * cost;
    return formatCurrency(total);
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
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
                aria-label={`Remove ${item.name} from cart`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



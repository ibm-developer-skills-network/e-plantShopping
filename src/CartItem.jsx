import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, onCheckout }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    const total = cart.reduce((sum, it) => {
      const price = parseFloat(String(it.cost).replace(/[^0-9.]/g, '')) || 0;
      const qty = it.quantity || 1;
      return sum + price * qty;
    }, 0);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) onContinueShopping();
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    if (onCheckout) onCheckout();
    else alert('Functionality to be added for future reference');
  };



  const handleIncrement = (item) => {
    const newQty = (item.quantity || 1) + 1;
    dispatch(updateQuantity({ name: item.name, quantity: newQty }));
  };

  const handleDecrement = (item) => {
    const currentQty = item.quantity || 1;
    if (currentQty > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: currentQty - 1 }));
    } else {
      // If quantity would go below 1, remove the item
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const price = parseFloat(String(item.cost).replace(/[^0-9.]/g, '')) || 0;
    const qty = item.quantity || 1;
    const total = price * qty;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
  };

  const isEmpty = !cart || cart.length === 0;

  if (isEmpty) {
    return (
      <div className="cart-container">
        <h2 style={{ color: 'black' }}>Your cart is empty</h2>
        <p>Looks like you haven't added any plants yet.</p>
        <div className="continue_shopping_btn">
          <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: {calculateTotalAmount()}</h2>
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
              <div className="cart-item-total">Total: {calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
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

export default CartItem;



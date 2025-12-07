import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, updateQuantity } from './CartSlice'; // Task 4: updateQuantity and removeItem actions
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalPrice); 
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return totalAmount; 
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  // Task 4: Dispatches updateQuantity with 'increment'
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, type: 'increment' }));
  };

  // Task 4: Dispatches updateQuantity with 'decrement'
  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, type: 'decrement' }));
  };

  // Task 4: Dispatches deleteItem
  const handleRemove = (item) => {
    dispatch(deleteItem(item.name));
  };

  const calculateTotalCost = (item) => {
    const subtotal = item.unitPrice * item.quantity;
    return subtotal.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      {cartItems.length === 0 ? (
          <div className="empty-cart-message">
              Your shopping cart is empty. Click "Continue Shopping" to add items.
          </div>
      ) : (
          <div>
            {cartItems.map(item => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">Price: ${item.unitPrice.toFixed(2)}</div> 
                  
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
      )}
      
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
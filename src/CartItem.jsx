import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
     return cart.reduce((total, item) => {
    const costNumber = parseFloat(item.cost.replace('$', '')) || 0;
    return total + costNumber * item.quantity;
  }, 0);
  };

  // Handle continue shopping
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckout = () => {
    alert("Checkout Coming Soon 🚀");
  };
  
  // Increment quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  // Remove item completely
  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  // Calculate total cost per item
  const calculateTotalCost = (item) => {
    const costNumber = parseFloat(item.cost.replace('$', '')) || 0;
    return (costNumber * item.quantity).toFixed(2);
  };

 if (cart.length === 0) {
  return (
    <div className="cart-container">
      <h2>Your Cart is Empty</h2>
      <button className="get-started-button" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
    </div>
  );
}

  return (
  <div className="cart-container">
    <h2>Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>
    <div className="cart-items-list">
      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-cost">{item.cost}</div>
            
            <div className="cart-item-quantity">
              <button className="cart-item-button" onClick={() => handleDecrement(item)}>-</button>
              <span className="cart-item-quantity-value">{item.quantity}</span>
              <button className="cart-item-button" onClick={() => handleIncrement(item)}>+</button>
            </div>

            <div className="cart-item-total">
              Subtotal: ${calculateTotalCost(item)}
            </div>
            
            <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    
    <div className="continue_shopping_btn">
    <button className="get-started-button" onClick={onContinueShopping}>
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
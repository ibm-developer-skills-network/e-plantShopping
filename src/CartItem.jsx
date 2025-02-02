import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ item, handleRemoveFromCart }) => {
  const dispatch = useDispatch();

  

  // Calculate subtotal for each item type
  const calculateTotalCost = (item) => {
    const itemCost = parseFloat(item.cost.replace('$', '')); // Convert cost to number
    return itemCost * item.quantity;
  };
  const handleRemove = () => {
    dispatch(removeItem(item.name)); // Dispatch the remove action
    handleRemoveFromCart(item.name); // Call the parent function to reset button state
  };


  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name)); // Remove if quantity reaches 0
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
    }
  };

  

  return (
    <div className="cart-item-container">
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Cost: {item.cost}</p>

        {/* Quantity controls */}
        <div className="cart-item-quantity">
          <button 
            className="cart-item-button cart-item-button-dec" 
            onClick={() => handleDecrement(item)}>-</button>
          <span className="cart-item-quantity-value">{item.quantity}</span>
          <button 
            className="cart-item-button cart-item-button-inc" 
            onClick={() => handleIncrement(item)}>+</button>
        </div>

        {/* Subtotal for this item */}
        <div className="cart-item-total">Subtotal: ${calculateTotalCost(item).toFixed(2)}</div>

        {/* Remove item */}
        <button className="cart-item-delete" onClick={handleRemove}>Remove</button>
      </div>
    </div>
    </div>
  );
};

export default CartItem;
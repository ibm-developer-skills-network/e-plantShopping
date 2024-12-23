import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, deleteFromCartCallback }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach(plant => {
        totalAmount += plant.quantity * parseFloat(plant.cost.replace('$', ''));
    })
      return totalAmount;
  };

  const handleContinueShopping = (e) => {
   onContinueShopping(e)
  };

const handleCheckoutShopping = (e) => {
    alert("Functionality to be added for future reference")
}

  const handleIncrement = (item) => {
      const existingPlant = cart.find(plant => plant.name === item.name)
      if (existingPlant) {
          dispatch(updateQuantity({...existingPlant, quantity: existingPlant.quantity + 1}));
      }
  };

  const handleDecrement = (item) => {
      const existingPlant = cart.find(plant => plant.name === item.name)
      if (existingPlant && existingPlant.quantity > 1) {
          dispatch(updateQuantity({...existingPlant, quantity: existingPlant.quantity - 1}));
      }
  };

  const handleRemove = (item) => {
      const existingPlant = cart.find(plant => plant.name === item.name)
      if (existingPlant) {
          dispatch(removeItem(existingPlant));
          deleteFromCartCallback(existingPlant);
      }
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
      return parseFloat(item.cost.replace('$', '')) * item.quantity;
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
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'>{ cart.length }</div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



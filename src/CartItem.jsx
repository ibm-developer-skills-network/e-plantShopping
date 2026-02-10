import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, decrementQuantity} from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  console.log("Cart items in CartItem component:", cart);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.plant.cost.substring(1)) * item.quantity; // Assuming each item has a 'plant' object with 'cost' and 'quantity'
    });
    return total;
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping();
    }
    
   
  };


  const handleIncrement = (item) => {
    console.log("Incrementing quantity for item:", item);
    dispatch(updateQuantity(item.plant));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.plant));
   
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.plant));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return (parseFloat(item.plant.cost.substring(1)) * item.quantity).toFixed(2); 

    

  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.plant.name}>
            <img className="cart-item-image" src={item.plant.image} alt={item.plant.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.plant.name}</div>
              <div className="cart-item-cost">{item.plant.cost}</div>
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
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



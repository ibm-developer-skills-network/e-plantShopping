import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total_cart_amount =0;
    cart.forEach(item => {
        const itemCost =parseFloat(item.cost.replace('$',''));
        total_cart_amount += itemCost * item.updateQuantity;
    });
    return total_cart_amount;
 
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    onContinueShopping(e);
   
  };

  const handleCheckOutShopping =() => {
    alert('Coming Soon!')
  };

  const handleIncrement = (item) => {
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({name: item.name,quantity:
    newQuantity}));
    console.log("Item quantity incremented by 1: ", newQuantity,
item);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 0) {
        const newQuantity = item.quantity - 1;
        if (newQuantity === 0) {
          dispatch(removeItem({ name: item.name }));
          console.log("Item removed quantity went below 1:", item);
        } else {
          dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
          console.log("Item quantity decremented by 1: ", newQuantity, item);
        }
      } else {
        dispatch(removeItem({ name: item.name }));
        console.log("Item removed because item quantity was 0:", item);
      }
  };

  const handleRemove = (item) => {
    dispatch(removeItem({name: item.name}));
    console.log("Item removed:", item);
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const itemCost = parseFloat(item.cost.replace('$', ''));
    return itemCost * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>
      <div className='cart-items'>
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
              <div className="cart-item-total">Total: ${calculateTotalCost(item).toFixed(2)}</div>

              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckOutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



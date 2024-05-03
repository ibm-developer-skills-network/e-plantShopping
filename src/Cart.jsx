// Cart.js

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css'
const Cart = ({ onUpdateCart, onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity * parseFloat(item.cost.substring(1));
    });
    return total;
  };
  const handleContinueShopping = (e) => {
    onContinueShopping(e); // Call the function passed from the parent component
  };
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference')
  };
  
  return (
    <div className="cart-container" >
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
     <div>
     {cart.map(item => (
        <CartItem key={item.name} item={item} />
      ))}
     </div>
      <div style={{ marginTop: '20px', color:'black' }} className='total_cart_amount'></div> {/* Display total amount */}
      <div className="continue_shopping_btn">
    <button className="get-started-button" onClick={(e)=>handleContinueShopping(e)}>Continue Shopping</button>
          <br />
          <button className="get-started-button1" onClick={(e)=>handleCheckoutShopping(e)}>Checkout</button>
    </div>
    </div>
  );
};

export default Cart;



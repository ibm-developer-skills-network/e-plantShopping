// Cart.js

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css'
const Cart = () => {
  const cart = useSelector(state => state.cart.items);

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity * parseFloat(item.cost.substring(1));
    });
    return total;
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
    </div>
  );
};

export default Cart;

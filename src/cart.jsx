
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cost for all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>

      {/* List of Cart Items */}
      {cartItems.map((item) => (
        <CartItem key={item.name} item={item} />
      ))}

      {/* Total amount */}
      <div className="cart-total">
        <h3>Total Amount: ${calculateTotalAmount().toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;

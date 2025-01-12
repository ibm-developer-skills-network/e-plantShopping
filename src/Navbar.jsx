import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice'; // Ensure correct path to CartSlice
import './Navbar.css';

const Navbar = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <nav className="navbar">
      <h1>Plant Shop</h1>
      <div className="cart-icon">
        <span className="cart-count">Cart: {totalQuantity} items</span>
        <img src="path/to/cart-icon.png" alt="Cart" />
      </div>
    </nav>
  );
};

export default Navbar;


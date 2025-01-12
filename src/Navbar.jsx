import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice'; // Adjust the path as needed
import './Navbar.css'; // Adjust the path as needed

const Navbar = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <h1>Paradise Nursery</h1>
        </div>
        <div className="navbar-cart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="40" width="40">
            <rect width="156" height="156" fill="none"></rect>
            <circle cx="80" cy="216" r="12"></circle>
            <circle cx="184" cy="216" r="12"></circle>
            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <span className="cart-quantity">{totalQuantity}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

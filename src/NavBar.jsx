import React from 'react';
import { useSelector } from 'react-redux';


const NavBar = ({ onViewCart }) => {
    // Get the cart items from the Redux store
    const cart = useSelector(state => state.cart.items);
  
    // Calculate the total quantity of items in the cart
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  
    return (
      <nav className="navbar">
        <div className="navbar-brand">Paradise Nursery</div>
        <div className="navbar-cart" onClick={onViewCart}>
          <span>Cart</span>
          <span className="cart-icon">{totalQuantity}</span>
        </div>
      </nav>
    );
  };
  
  export default NavBar;

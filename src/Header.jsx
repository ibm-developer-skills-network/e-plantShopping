import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <div className="header-container">
        <div className="tag">
          <Link to="/" className="tag_home_link">
            <img
              src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg"
              alt="logo"
            />
            <h3>Paradise Nursery</h3>
          </Link>
        </div>
        <nav className="luxury">
          <ul className="ul">
            <div className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/plants">Plants</Link>
              </li>
              <li className="cart-link-wrapper">
                <Link to="/cart" className="cart-link">
                  <span className="cart-icon">🛒</span>
                  {totalItems > 0 && (
                    <span className="cart_quantity_count">{totalItems}</span>
                  )}
                  <span className="cart-text">Cart</span>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

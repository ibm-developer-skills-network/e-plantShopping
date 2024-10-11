import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Get cart items from the Redux store
  const items = useSelector((state) => state.cart.items);
  // Calculate total quantity of items in the cart
  const totalItems = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Paradise Nursery</h1>
        {/* Cart Icon */}
        <div className="cart-icon">
          🛒 {totalItems > 0 ? totalItems : ''} {/* Display quantity if > 0 */}
        </div>
      </header>

      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;

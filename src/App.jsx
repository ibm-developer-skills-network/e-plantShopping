import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';
import './index.css'; // Import your global styles
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleViewCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  return (
    <Provider store={store}>
      <div className="app-container">
        <div className={`landing-page ${showProductList || showCart ? 'fade-out' : ''}`}>
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
              <button className="view-cart-button" onClick={handleViewCartClick}>
                View Cart
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs /> {/* Integrate AboutUs component here */}
            </div>
          </div>
        </div>
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
          <ProductList />
        </div>
        <div className={`cart-container ${showCart ? 'visible' : ''}`}>
          <CartItem onContinueShopping={handleContinueShopping} />
        </div>
      </div>
    </Provider>
  );
}

export default App;













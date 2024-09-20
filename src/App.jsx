import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import cartIcon from 'https://www.flaticon.es/icono-gratis/carrito-de-compras_107831';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleCartUpdate = (count) => {
    setCartCount(count);
  };

  return (
    <div className="app-container">
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
        <ProductList onCartUpdate={handleCartUpdate} />
      </div>

      {/* Icono del carrito */}
      <div className="cart-icon">
        <span className="cart-count">{cartCount}</span>
        <img 
          src="https://www.flaticon.es/icono-gratis/carrito-de-compras_107831" 
          alt="Cart" 
          style={{ width: '30px', height: '30px' }} // Ajusta el tamaño según sea necesario
        />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import { addItem } from './CartSlice'; // Ensure this import matches the actual file

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const dispatch = useDispatch(); // Access Redux dispatch

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Landing Page Section */}
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

      {/* Product List Section */}
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? "fade-out" : ""}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome to Disha Nursery</h1>
            <div className="divider"></div>
            <p>Where Nature and Peace Flourish.</p>
            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div
        className={`product-list-container ${showProductList ? "visible" : ""}`}
      >
        <ProductList cartCount={cartCount} setCartCount={setCartCount} />
      </div>
    </div>
  );
}

export default App;

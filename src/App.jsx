import { useState } from "react";
import { useSelector } from "react-redux"; 
import ProductList from "./ProductList";
import CartItem from "./CartItem"; 
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [view, setView] = useState("landing");
  const cart = useSelector((state) => state.cart.items);
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleGetStartedClick = () => {
    setView("product");
  };

  const handleCartClick = () => {
    setView("cart");
  };

  const handleHomeClick = () => {
    setView("landing");
  };

  const handleContinueShopping = () => {
    setView("product");
  };

  return (
    <div className="app-container">
      {view === "landing" && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
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
      )}  

      {view === "product" && (
        <div className="product-list-container visible">
          <ProductList
            onHomeClick={handleHomeClick}
            onCartClick={handleCartClick}
            totalItems={totalCartItems} 
          />
        </div>
      )}
      {view === "cart" && (
        <div className="cart-container visible">
          <CartItem
            onContinueShopping={handleContinueShopping}
            onHomeClick={handleHomeClick}
            totalItems={totalCartItems} 
          />
        </div>
      )}
    </div>
  );
}

export default App;

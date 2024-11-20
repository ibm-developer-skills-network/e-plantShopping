
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice'; // Importa l'azione di Redux

function App() {

  const [showProductList, setShowProductList] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };
  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Aggiunge il prodotto al carrello tramite Redux
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true, // Imposta lo stato locale per tracciare l'aggiunta
    }));
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
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onAddToCart={handleAddToCart} addedToCart={addedToCart} />
      </div>
    </div>
  );
}

export default App;




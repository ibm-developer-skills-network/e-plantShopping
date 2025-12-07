import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="landing-page">
                <div className="background-image"></div>
                <div className="content">
                  <div className="landing_content">
                    <h1>Welcome To Paradise Nursery</h1>
                    <div className="divider"></div>
                    <p>Where Green Meets Serenity</p>
                    <Link to="/plants">
                      <button className="get-started-button">
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <div className="aboutus_container">
                    <div className="about-us-container">
                      <p className="about-us-description">
                        Welcome to Paradise Nursery, where green meets serenity!
                      </p>
                      <p className="about-us-content">
                        At Paradise Nursery, we are passionate about bringing
                        nature closer to you. Our mission is to provide a wide
                        range of high-quality plants that not only enhance the
                        beauty of your surroundings but also contribute to a
                        healthier and more sustainable lifestyle.
                      </p>
                      <p className="about-us-content">
                        Our team of experts is dedicated to ensuring that each
                        plant meets our strict standards of quality and care.
                        Whether you're a seasoned gardener or just starting your
                        green journey, we're here to support you every step of
                        the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/plants"
            element={
              <>
                <Header />
                <div className="main-content">
                  <ProductList />
                </div>
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <div className="main-content">
                  <CartItem />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

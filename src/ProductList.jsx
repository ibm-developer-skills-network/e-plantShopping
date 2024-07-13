import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CreatSlice";
import { data } from "./data";
import { Link } from "react-router-dom";
function ProductList() {
  const cart = useSelector((state) => state.cart);
  // console.log(cart.items);
  const dispatch = useDispatch();
  const plantsArray = data;
  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff!important",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignIems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };
  const [addedToCart, setAddedToCart] = useState({});
  const handleAddToCart = (plant) => {
    console.log(plant);
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };
  console.log(cart.items.length);
  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" style={{ textDecoration: "none" }}>
              <div>
                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                <i style={{ color: "white" }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            {" "}
            <a href="#" style={styleA}>
              Plants
            </a>
          </div>
          <div>
            {" "}
            <Link to="cart" style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68">
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    id="mainIconPathAttribute"></path>
                </svg>
                {cart.items.length}
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1>
              <div>{category.category}</div>
            </h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />
                  <div className="product-title">{plant.name}</div>
                  <div>
                    <p>{plant.description}</p>
                    <span className="product-price">{plant.cost}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    className="product-button">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

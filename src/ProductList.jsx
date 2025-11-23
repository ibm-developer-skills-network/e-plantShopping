import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);
  const cartCount = cartItems.reduce((s, i) => s + (i.quantity || 0), 0);

  const [showCart, setShowCart] = useState(false);
  const [disabledItems, setDisabledItems] = useState({});

  // Define six unique products across at least three categories
  const products = [
    {
      id: 1,
      name: "Snake Plant",
      image:
        "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
      cost: "$15",
      category: "Air Purifying",
    },
    {
      id: 2,
      name: "Peace Lily",
      image:
        "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
      cost: "$18",
      category: "Air Purifying",
    },
    {
      id: 3,
      name: "Lavender",
      image:
        "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3",
      cost: "$20",
      category: "Aromatic",
    },
    {
      id: 4,
      name: "Jasmine",
      image:
        "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3",
      cost: "$18",
      category: "Aromatic",
    },
    {
      id: 5,
      name: "Pothos",
      image:
        "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
      cost: "$10",
      category: "Low Maintenance",
    },
    {
      id: 6,
      name: "ZZ Plant",
      image:
        "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3",
      cost: "$25",
      category: "Low Maintenance",
    },
  ];

  // Group by category
  const grouped = products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  useEffect(() => {
    // Initialize disabled state from items already in cart
    const map = {};
    cartItems.forEach((i) => {
      map[i.name] = true;
    });
    setDisabledItems(map);
  }, [cartItems]);

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

  const handleHomeClick = (e) => {
    e && e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e && e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e && e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e && e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setDisabledItems((prev) => ({ ...prev, [product.name]: true }));
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" onClick={(e) => handleHomeClick(e)}>
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
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
              Plants
            </a>
          </div>
          <div>
            {" "}
            <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <h1 className="cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    id="IconChangeColor"
                    height="48"
                    width="48"
                  >
                    <rect width="156" height="156" fill="none"></rect>
                    <circle cx="80" cy="216" r="12"></circle>
                    <circle cx="184" cy="216" r="12"></circle>
                    <path
                      d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                      fill="none"
                      stroke="#faf9f9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      id="mainIconPathAttribute"
                    ></path>
                  </svg>
                </h1>
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: -6,
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "3px 7px",
                    fontSize: "12px",
                  }}
                >
                  {cartCount}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid" style={{ padding: "40px" }}>
          {Object.keys(grouped).map((category) => (
            <div key={category} style={{ marginBottom: "30px" }}>
              <h2 style={{ color: "#333" }}>{category}</h2>
              <div className="product-list">
                {grouped[category].map((p) => (
                  <div key={p.id} className="product-card">
                    <img src={p.image} alt={p.name} className="product-image" />
                    <h3 className="product-title">{p.name}</h3>
                    <div className="product-price">{p.cost}</div>
                    <button
                      className="product-button"
                      disabled={!!disabledItems[p.name]}
                      onClick={() => handleAddToCart(p)}
                    >
                      {disabledItems[p.name] ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;

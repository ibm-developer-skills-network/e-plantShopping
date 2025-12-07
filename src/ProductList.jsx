import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      name: "Monstera Deliciosa",
      category: "Tropical",
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop",
      description: "Large, glossy leaves with unique holes.",
      cost: "$45.99",
    },
    {
      name: "Snake Plant",
      category: "Low Light",
      image:
        "https://images.unsplash.com/photo-1586985367371-7d672fdc5f33?w=400&h-400&fit=crop",
      description: "Tall, sword-like leaves that purify air.",
      cost: "$24.99",
    },
    {
      name: "Fiddle Leaf Fig",
      category: "Statement",
      image:
        "https://images.unsplash.com/photo-1593482892290-5d188b9e56dc?w=400&h=400&fit=crop",
      description: "Large, violin-shaped leaves.",
      cost: "$59.99",
    },
    {
      name: "Peace Lily",
      category: "Flowering",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      description: "Elegant white flowers and dark green leaves.",
      cost: "$32.99",
    },
    {
      name: "Spider Plant",
      category: "Easy Care",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
      description: "Produces baby plantlets on long stems.",
      cost: "$18.99",
    },
    {
      name: "ZZ Plant",
      category: "Low Maintenance",
      image:
        "https://images.unsplash.com/photo-1545243421-89e7c5d5d5c3?w=400&h=400&fit=crop",
      description: "Glossy, dark green leaves that thrive in low light.",
      cost: "$29.99",
    },
    {
      name: "Pothos",
      category: "Trailing",
      image:
        "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=400&h=400&fit=crop",
      description: "Fast-growing vine with heart-shaped leaves.",
      cost: "$16.99",
    },
    {
      name: "Aloe Vera",
      category: "Succulent",
      image:
        "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=400&h=400&fit=crop",
      description: "Medicinal plant with soothing gel.",
      cost: "$14.99",
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));

    // Re-enable button after 2 seconds
    setTimeout(() => {
      setAddedToCart((prev) => ({
        ...prev,
        [plant.name]: false,
      }));
    }, 2000);
  };

  // Calculate total items in cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Get unique categories
  const categories = [...new Set(plantsArray.map((plant) => plant.category))];

  return (
    <div className="product-list-container">
      <div className="product-header">
        <div className="plantname_heading">
          <div className="plant_heading">
            <h2>Our Plant Collection</h2>
          </div>
        </div>
        <div className="cart-summary">
          <span>
            Total Items in Cart: <strong>{totalItems}</strong>
          </span>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3>{category} Plants</h3>
          <div className="product-grid">
            {plantsArray
              .filter((plant) => plant.category === category)
              .map((plant, index) => (
                <div key={index} className="product-card">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h4 className="product-title">{plant.name}</h4>
                    <p className="description">{plant.description}</p>
                    <div className="price-cart">
                      <span className="price">{plant.cost}</span>
                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                        className={`product-button ${
                          addedToCart[plant.name] ? "added-to-cart" : ""
                        }`}
                      >
                        {addedToCart[plant.name]
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

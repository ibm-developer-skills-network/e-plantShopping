import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const ProductList = () => {
  const plantsArray = [
    {
      name: "Aloe Vera",
      image: "https://example.com/aloe-vera.jpg",
      description: "A medicinal plant for skincare.",
      cost: "$10.00",
    },
    {
      name: "Snake Plant",
      image: "https://example.com/snake-plant.jpg",
      description: "A low-maintenance houseplant.",
      cost: "$15.00",
    },
  ];

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Track which products have been added to the cart
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 })); // Add plant to cart with quantity 1
    setAddedToCart({ ...addedToCart, [plant.name]: true }); // Mark as added
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>Price: {plant.cost}</p>

          {/* Show "Added" if already in cart */}
          {addedToCart[plant.name] || cartItems.some((item) => item.name === plant.name) ? (
            <button disabled>Added to Cart</button>
          ) : (
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

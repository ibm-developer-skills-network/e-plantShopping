import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice"; // Import addItem action

const plantsArray = [
  {
    id: 1,
    name: "Aloe Vera",
    image: "/images/aloe-vera.jpg",
    description: "A succulent plant with healing properties.",
    cost: "$10",
  },
  {
    id: 2,
    name: "Snake Plant",
    image: "/images/snake-plant.jpg",
    description: "A hardy plant that improves air quality.",
    cost: "$15",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Dispatch plant data to Redux store
    setAddedToCart((prevState) => ({ ...prevState, [plant.name]: true })); // Update state
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.id} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.cost}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

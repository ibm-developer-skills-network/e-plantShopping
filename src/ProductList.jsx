import React, { useState, useEffect } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList({ onHomeClick }) {

    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);

    const dispatch = useDispatch();

    // ✅ Redux cart state
    const cartItems = useSelector(state => state.cart.items);

    // ✅ REQUIRED: total quantity in cart
    const calculateTotalQuantity = () => {
        return cartItems
            ? cartItems.reduce((total, item) => total + item.quantity, 0)
            : 0;
    };

    const plantsArray = [/* your full plant data stays unchanged */];

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div>

            {/* NAVBAR */}
            <div className="navbar">

                <div className="tag">
                    <h3>Paradise Nursery</h3>
                </div>

                {/* PLANTS + CART */}
                <div>

                    <a href="#" onClick={(e) => handleCartClick(e)}>
                        🛒 {calculateTotalQuantity()}
                    </a>

                </div>

            </div>

            {/* MAIN CONTENT */}
            {!showCart ? (

                <div className="product-grid">

                    {plantsArray.map((category, index) => (
                        <div key={index}>

                            <h1>{category.category}</h1>

                            <div className="product-list">

                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>

                                        <img src={plant.image} alt={plant.name} />

                                        <h3>{plant.name}</h3>

                                        <p>{plant.description}</p>

                                        <p>{plant.cost}</p>

                                        <button
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            Add to Cart
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
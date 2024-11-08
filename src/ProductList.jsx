import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Import addItem action
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false); 

    // Retrieve the total quantity of items in the cart
    const totalQuantity = useSelector(state =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
    );

    const handleAddToCart = (plant) => {
        // Dispatch addItem action to add the plant to the cart
        dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
    };

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', padding: '15px', color: '#fff' }}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#" onClick={() => setShowCart(true)} style={{ color: 'white', fontSize: '30px', textDecoration: 'none', marginRight: '20px' }}>
                        Cart ({totalQuantity})
                    </a>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {/* Map over plantsArray to render each plant with an "Add to Cart" button */}
                    {/* Assume plantsArray exists with plant objects */}
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2>{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img src={plant.image} alt={plant.name} className="product-image" />
                                        <h3 className="product-title">{plant.name}</h3>
                                        <p className="product-description">{plant.description}</p>
                                        <p className="product-cost">{plant.cost}</p>
                                        <button
                                            className="product-button"
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
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;

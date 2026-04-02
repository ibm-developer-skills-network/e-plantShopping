import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; 
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores and purifies the air.", cost: "$18" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop", description: "Sweet fragrance, promotes relaxation.", cost: "$18" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating scent, often used in cooking.", cost: "$15" }
            ]
        }
    ];

    return (
        <div className="product-page">
            <nav className="navbar">
                <div className="tag" onClick={onHomeClick}>
                    <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="logo" />
                    <div className="tag_home_link">
                        <h3>Paradise Nursery</h3>
                        <i>Where Green Meets Serenity</i>
                    </div>
                </div>

                <div className="luxury">
                    <a href="#" onClick={() => setShowCart(false)}>Plants</a>
                </div>

                <div className="cart" onClick={() => setShowCart(true)}>
                    <svg viewBox="0 0 256 256" width="55" height="55">
                        <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" 
                              className="cart-body" fill="none" stroke="white" strokeWidth="2"></path>
                        <circle cx="80" cy="216" r="12" className="cart-wheel"></circle>
                        <circle cx="184" cy="216" r="12" className="cart-wheel"></circle>
                    </svg>
                    {totalItems > 0 && <span className="cart_quantity_count">{totalItems}</span>}
                </div>
            </nav>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, idx) => (
                        <div key={idx}>
                            <div className="plantname_heading">
                                <h2 className="plant_heading">{category.category}</h2>
                            </div>
                            <div className="product-list">
                                {category.plants.map((plant, i) => {
                                    const isInCart = cart.some(item => item.name === plant.name);
                                    return (
                                        <div key={i} className="product-card">
                                            <h3 className="product-title">{plant.name}</h3>
                                            <img src={plant.image} alt={plant.name} className="product-image" />
                                            <p className="product-price">{plant.cost}</p>
                                            <p style={{fontSize:'13px', fontStyle:'italic', color:'#555', marginBottom:'15px'}}>{plant.description}</p>
                                            <button 
                                                className={`product-button ${isInCart ? 'added-to-cart' : ''}`}
                                                disabled={isInCart}
                                                onClick={() => dispatch(addItem(plant))}
                                            >
                                                {isInCart ? 'Added to Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    );
                                })}
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
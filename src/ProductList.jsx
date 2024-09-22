import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import { plantsArray } from './data';

function ProductList({ onViewCartClick }) {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));
    const [addedToCart, setAddedToCart] = useState({});

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true
        }));
    };
  
   
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="https://beannorelle.github.io/e-plantshopping-nursery/" style={{ textDecoration: 'none' }}>
                            <div className="tag_home_link">
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div><a href="#" style={styleA}>Plants</a></div>
                    <div className="cart-container" onClick={onViewCartClick}>
                        <a href="#" style={styleA}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                <rect width="256" height="256" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                            </svg>
                            <span className="cart-count">{cartItemsCount}</span>
                        </a>
                    </div>
                </div>
            </div>
  
            <div className="product-grid">
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h2 className="plantname_heading">{category.category}</h2>
                        <div className="product-list">
                            {category.plants.map((plant, plantIndex) => (
                                <div key={plantIndex} className="product-card">
                                    <img className="product-image" src={plant.image} alt={plant.name} />
                                    <h3 className="product-title">{plant.name}</h3>
                                    <p className="product-description">{plant.description}</p>
                                    <p className="product-price">{plant.cost}</p>
                                    <button
                                        className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={addedToCart[plant.name]}
                                    >
                                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
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
import React, { useState, useMemo } from 'react';
import CartItem from './CartItem';
import { addItem, selectTotalQuantity } from './CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';

const Navbar = ({ onShowPlants, onShowCart, totalQuantity }) => (
    <div className="navbar">
        <div className="tag">
            <div className="luxury">
                <img src="" alt="" />
                <a href="/" style={{ textDecoration: 'none' }}>
                    <div>
                        <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                        <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                    </div>
                </a>
            </div>
        </div>
        <div className="ul">
            <div>
                <a href="#" onClick={onShowPlants} className="a">Plants</a>
            </div>
            <div>
                <a href="#" onClick={onShowCart} className="a">
                    <h1 className='cart'>
                        <svg xmlns="" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                            <rect width="156" height="156" fill="none"></rect>
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                            <text x="50%" y="50%" textAnchor="middle" fill="#faf9f9" fontSize="86" dy=".3em">{totalQuantity}</text>
                        </svg>
                    </h1>
                </a>
            </div>
        </div>
    </div>
);

function PlantList() {
    const dispatch = useDispatch();
    const [view, setView] = useState('plants');
    const [addedToCart, setAddedToCart] = useState({});
    const totalQuantity = useSelector(selectTotalQuantity);

    const plantsArray = [
        { category: "Air Purifying Plants", plants: [] },
        { category: "Aromatic Fragrant Plants", plants: [] },
        { category: "Insect Repellent Plants", plants: [] },
        { category: "Medicinal Plants", plants: [] },
        { category: "Low Maintenance Plants", plants: [] },
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    const handleViewChange = (newView) => (e) => {
        e.preventDefault();
        setView(newView);
    };

    return (
        <div>
            <Navbar onShowPlants={handleViewChange('plants')} onShowCart={handleViewChange('cart')} totalQuantity={totalQuantity} />
            {view === 'cart' ? (
                <CartItem onContinueShopping={() => setView('plants')} />
            ) : (
                <div className="product-grid">
                    {plantsArray.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h1><center>{category.category}</center></h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div key={plantIndex} className='product-card'>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className='product-title'> {plant.name} </div>
                                        <div className='product-description'> {plant.description} </div>
                                        <div className='product-price'> {plant.cost} </div>
                                        <button className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PlantList;
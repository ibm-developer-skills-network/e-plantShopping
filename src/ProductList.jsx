import React, { useState, useMemo } from 'react';
import CartItem from './CartItem';
import Navbar from './Navbar';
import { addItem, selectTotalQuantity } from './CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';

function PlantList() {
    const dispatch = useDispatch();
    const [view, setView] = useState('plants');
    const [addedToCart, setAddedToCart] = useState({});
    const totalQuantity = useSelector(selectTotalQuantity);

    const plantsArray = useMemo(() => [
        { category: "Air Purifying Plants", plants: [] },
        { category: "Aromatic Fragrant Plants", plants: [] },
        { category: "Insect Repellent Plants", plants: [] },
        { category: "Medicinal Plants", plants: [] },
        { category: "Low Maintenance Plants", plants: [] },
    ], []);

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
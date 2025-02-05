import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
// Assuming CartSlice has been properly set up and imported
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Import addItem action

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [addedToCart, setAddedToCart] = useState({}); // Manage which products have been added
    const dispatch = useDispatch(); // To dispatch actions to CartSlice

    const plantsArray = [
        // your plants array from above
    ];

    const handleAddToCart = (plant) => {
        // Dispatching the selected plant to the CartSlice
        dispatch(addItem(plant));

        // Updating local state to reflect which plant was added to the cart
        setAddedToCart(prevState => ({
            ...prevState,
            [plant.name]: true, // Mark this plant as added
        }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false); // Hide the cart when navigating to plants
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false); // Hide the cart
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div><a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a></div>
                    <div><a href="#" onClick={handleCartClick} style={styleA}><h1 className="cart">🛒</h1></a></div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category) => (
                        <div key={category.category}>
                            <h2>{category.category}</h2>
                            <div className="plant-list">
                                {category.plants.map((plant) => (
                                    <div className="plant-card" key={plant.name}>
                                        <img src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p>{plant.cost}</p>

                                        <button
                                            className="add-to-cart-btn"
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]} // Disable the button if already added
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
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



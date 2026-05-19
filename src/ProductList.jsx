import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import PropTypes from 'prop-types';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({}); 

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Access the Redux store to retrieve and display the total quantity of items currently in the cart
    const calculateTotalQuantity = () => { 
        return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0; 
    };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores and purifies the air.", cost: "$18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to the air and removes toxins.", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to care for and effective at removing toxins.", cost: "$17" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Purifies the air and has healing properties for skin.", cost: "$14" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Sweet fragrance, promotes relaxation.", cost: "$18" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating scent, often used in cooking.", cost: "$15" },
                { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg", description: "Refreshing aroma, used in teas and cooking.", cost: "$12" },
                { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Citrusy scent, relieves stress and promotes sleep.", cost: "$14" },
                { name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", description: "Hyacinth is a beautiful flowering plant known for its fragrant.", cost: "$22" }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                { name: "Oregano", image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg", description: "The oregano plants contains compounds that can deter certain insects.", cost: "$10" },
                { name: "Marigold", image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg", description: "Natural insect repellent, also adds color to the garden.", cost: "$8" },
                { name: "Geraniums", image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg", description: "Known for their insect-repelling properties while adding a pleasant scent.", cost: "$20" },
                { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg", description: "Repels flies and mosquitoes, also used in cooking.", cost: "$9" },
                { name: "Lavender (Repellent)", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Catnip", image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg", description: "Repels mosquitoes and attracts cats.", cost: "$13" }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                { name: "Aloe Vera (Medicinal)", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Soothing gel used for skin ailments.", cost: "$14" },
                { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg", description: "Boosts immune system, helps fight colds.", cost: "$16" },
                { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg", description: "Relieves digestive issues and headaches.", cost: "$13" },
                { name: "Lemon Balm (Medicinal)", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Calms nerves and promotes relaxation.", cost: "$14" },
                { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg", description: "Soothes anxiety and promotes sleep.", cost: "$15" },
                { name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg", description: "Heals wounds and soothes skin irritations.", cost: "$12" }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Thrives in low light and requires minimal watering.", cost: "$25" },
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", description: "Tolerates neglect and can grow in various conditions.", cost: "$10" },
                { name: "Snake Plant (Low Maint)", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Needs infrequent watering and is resilient to most pests.", cost: "$15" },
                { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg", description: "Hardy plant that treats low light and neglect.", cost: "$20" },
                { name: "Succulents", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", description: "Drought-tolerant plants with unique shapes and colors.", cost: "$18" },
                { name: "Aglaonema", image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg", description: "Requires minimal care and adds color to indoor spaces.", cost: "$22" }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
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
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Dispatches the action to add product metadata globally
        
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true, // Registers key name as true to track active card state
        }));
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" style={{ height: '45px' }} />
                        <a href="/" onClick={(e) => handleHomeClick(e)} style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                                <i style={{ color: 'white', fontSize: '13px' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(false); }} style={styleA}>Plants</a></div>
                    <div> 
                        <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(true); }} style={styleA}>
                            <div className='cart' style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12" fill="#fff"></circle>
                                    <circle cx="184" cy="216" r="12" fill="#fff"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                                </svg>
                                {calculateTotalQuantity() > 0 && (
                                    <span style={{
                                        position: 'absolute', top: '0', right: '-10px',
                                        backgroundColor: '#ff4d4d', color: 'white',
                                        borderRadius: '50%', padding: '4px 8px', fontSize: '14px', fontWeight: 'bold'
                                    }}>{calculateTotalQuantity()}</span>
                                )}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} style={{ width: '100%', marginBottom: '40px' }}>
                            <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#2e7d32' }}>
                                <div>{category.category}</div>
                            </h1>
                            <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '280px', textAlign: 'center', background: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        <img 
                                            className="product-image" 
                                            src={plant.image} 
                                            alt={plant.name}
                                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                                        />
                                        <div className="product-title" style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{plant.name}</div>
                                        <div className="product-description" style={{ fontSize: '14px', color: '#666', height: '60px', overflow: 'hidden', marginBottom: '10px' }}>{plant.description}</div>
                                        <div className="product-cost" style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', color: '#4CAF50' }}>{plant.cost}</div>
                                        <button
                                            className="product-button"
                                            style={{
                                                backgroundColor: addedToCart[plant.name] ? '#9e9e9e' : '#4CAF50',
                                                color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer', fontWeight: 'bold', width: '100%'
                                            }}
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
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

ProductList.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
};

export default ProductList;
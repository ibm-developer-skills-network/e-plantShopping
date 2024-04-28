import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Import CSS file

import './ProductList.css'; // Import CSS file
import Cart from './Cart';
import AboutUs from './AboutUs';

function ProductList() {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false); // State to control the visibility of the Cart component
    const [addedToCart, setAddedToCart] = useState({}); // State to track which products are added to the cart
    const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store
    const [showAboutUs, setShowAboutUs] = useState(false); // State to control the visibility of the About Us page

    // Array of product details
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://m.media-amazon.com/images/I/71zmlJtzOCL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://m.media-amazon.com/images/I/51EA8nUMrpL._AC_UF1000,1000_QL80_.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://www.mydomaine.com/thmb/N3StDx3PyGbF0Pwafv-P9-qiNZU=/900x0/filters:no_upscale():strip_icc()/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://m.media-amazon.com/images/I/61kOabCb8GL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Rubber-Tree_Large_Pallas_Green_Variant.jpg?v=1698671415",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://www.happyhouseplants.co.uk/cdn/shop/articles/monika-stawowy-zOeoVqX-27U-unsplash.jpg?v=1698079371",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://cdn11.bigcommerce.com/s-jmzfi5zcr2/product_images/uploaded_images/mono-planting-of-lavender-in-decorative-container.jpg",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://5.imimg.com/data5/NL/WX/FI/SELLER-61339789/ojorey-mogar-flower-white-plant-with-pot-500x500.png",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://jiffyplants.com/wp-content/uploads/2024/02/shutterstock_1927384040_2-ezgif.com-resize.webp",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://blumart.mx/cdn/shop/products/DSC_0682_1940d61d-2541-47a9-83e5-6b13669beafc.jpg?v=1677191204",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://khushboonursery.in/cdn/shop/products/Single_Plant_in_6_Black_Plastic_Pot.jpg?v=1621897627",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Patchouli",
                    image: "https://images.thdstatic.com/productImages/a8e3844d-9c0d-4091-8f83-5a6137e0473c/svn/daylily-nursery-perennials-6948615649-64_600.jpg",
                    description: "Earthy fragrance, often used in perfumes and incense.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Citronella",
                    image: "https://www.gardenersnet.com/wp-content/uploads/Flowers/citronellaplant.jpg",
                    description: "Repels mosquitoes and other insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: "https://m.media-amazon.com/images/I/81Qec6DVL9L._AC_UF1000,1000_QL80_.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    name: "Basil Purple Fire",
                    image: "https://fairbanks.com.au/wp-content/uploads/2016/07/MicrosoftTeams-image-336-2-10.jpg",
                    description: "Repels mosquitoes and other insects, while adding a pleasant scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "https://thumbs.dreamstime.com/b/basil-plant-28045356.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                },
                {
                    name: "Lemon Thyme",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1U8g6gclsAsuwlbkjq5dw8RakF9a6rHpPJAHBqhnyw&s",
                    description: "Repels mosquitoes and adds a citrusy aroma to the garden.",
                    cost: "$11"
                },
                {
                    name: "Catnip",
                    image: "https://i0.wp.com/www.peluchosmascotas.es/wp-content/uploads/2021/06/PELUCHOS-MASCOTAS-HIERBA-GATERA-BLANDA-2.jpg?fit=1500%2C1500&ssl=1",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://img.freepik.com/premium-psd/aloe-vera-pot-isolated-transparent-background_879541-1021.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://previews.agefotostock.com/previewimage/medibigoff/72c5dc3dfa082f3f7dc9ccbdd75bbd5e/sfd-349950.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://static.vecteezy.com/system/resources/previews/041/883/954/non_2x/ai-generated-medicinal-plants-peppermint-in-a-pot-on-a-white-background-photo.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "https://nurtureplant.in/wp-content/uploads/2019/09/lempn-balm.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "https://balconygardenweb.b-cdn.net/wp-content/uploads/2020/03/Chamomile-in-Pot3.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "https://gardengram.in/cdn/shop/files/Calendula.png?v=1708925536",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.squarespace-cdn.com/content/v1/5fd3d17792814a28a1c0cf0b/1652615325954-9H8FJ65X74F4QI1O6572/ZZ+Plant+Medium+Light+Blue+Cylinder.PNG",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "https://m.media-amazon.com/images/I/716Z0j9LFDL._AC_UF1000,1000_QL80_.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: "https://rukminim2.flixcart.com/image/850/1000/ktd9mkw0/plant-sapling/k/6/6/yes-annual-no-fs-cc111-1-fifth-spring-original-imag6q7vxqzrsp4g.jpeg?q=20&crop=false",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://www.beardsanddaisies.co.uk/cdn/shop/products/fc71e99237f04675a1dc0bf5aca27081.thumbnail.0000000_1400x.jpg?v=1633378835",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "https://i.pinimg.com/564x/87/75/70/877570d46d7abd3141509062b37ad3d0.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.sanity.io/images/y346iw48/production/1df22cd61c1bf04ddd059595814f3bbc35e46efe-1200x1553.jpg?auto=format",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22"
                }
            ]
        }
    ];
     // Function to calculate total quantity of items in cart
     const calculateTotalQuantity = () => {
        return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    };

    // State to hold total quantity of items in cart
    const [totalQuantity, setTotalQuantity] = useState(calculateTotalQuantity());
    useEffect(() => {
        // Update total quantity whenever cartItems change
        setTotalQuantity(calculateTotalQuantity());
    }, [cartItems]);


    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
        }));
    };

    const handleAboutUsClick = (e) => {
        e.preventDefault();
        setShowAboutUs(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleHomeClick = (e) => {
        e.preventDefault();

        setShowAboutUs(false); // Set showAboutUs to false when "Home" link is clicked
        setShowCart(false); // Hide the cart when navigating back to Home
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
        setShowAboutUs(false); // Hide the About Us page when opening the cart
    };

    return (
        <div>
        <div className="navbar">
            <div className="tag">
                <img src="https://st4.depositphotos.com/32986944/38957/v/450/depositphotos_389579716-stock-illustration-green-tree-growing-in-hand.jpg" alt="" />
                <div className="luxury">
                    <h3>Paradise Nursery-</h3>
                    <i>Where Green Meets Serenity</i>
                </div>
            </div>
            <div className="ul">
                <div> <a href="/" onClick={() => handleHomeClick()}>Home</a></div>
                <div> <a href="/aboutus" onClick={(e)=>handleAboutUsClick(e)}>About Us</a></div>
                <div> <a href="/cart" onClick={(e) => handleCartClick(e)}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="78" width="78"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg><div className='cart_quantity_count'>{totalQuantity}</div></h1></a></div>
            </div>
        </div>

        {!showCart && !showAboutUs ? (
            <div className="product-grid">
                {/* Map through the products array to display product cards */}
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h1 className='plantname_heading'><div className="plant_heading">{category.category}</div></h1>
                        <div className="product-list">
                            {category.plants.map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                    <div className="product-title">{plant.name}</div>
                                    <img className="product-image" src={plant.image} alt={plant.name} />
                                    <div className="product-price">{plant.cost}</div>
                                    <div className="product-description"><i>{plant.description}</i></div>
                                    <button
                                        className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={addedToCart[plant.name]}
                                    >
                                        {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        ) : showAboutUs ? (
            <AboutUs />
        ) : (
            <Cart />
        )}
    </div>
    );
}

export default ProductList;

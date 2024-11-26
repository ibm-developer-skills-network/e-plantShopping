import React from 'react';
import './Navbar.css';

const Navbar = ({ onShowPlants, onShowCart, totalQuantity }) => (
    <div className="navbar">
        <div className="tag">
            <div className="luxury">
                <img src="" alt="Paradise Nursery Logo" />
                <a href="/">
                    <div>
                        <h2 className="luxury-text">Paradise Nursery</h2>
                        <i className="luxury-text">Where Green Meets Serenity</i>
                    </div>
                </a>
            </div>
        </div>
        <div className="ul">
            <div>
                <a href="#" onClick={onShowPlants} className="plants-link">Plants</a>
            </div>
            <div>
                <a href="#" onClick={onShowCart} className="cart-link">
                    <h1 className='cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">

                        </svg>
                    </h1>
                </a>
            </div>
        </div>
    </div>
);

export default Navbar;

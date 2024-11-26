import React from 'react';
import './Navbar.css';

const Navbar = ({ onShowPlants, onShowCart, totalQuantity }) => (
    <div className="navbar">
        <div className="tag">
            <div className="luxury">
                <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery Logo" />
                <a href="/" style={{ textDecoration: 'none' }}>
                    <div>
                        <h2 className="luxury-text">Paradise Nursery</h2>
                        <i className="luxury-text">Where Green Meets Serenity</i>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
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

export default Navbar;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    
    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => {
            const cost = parseFloat(item.cost.replace('$', ''));
            return total + (cost * item.quantity);
        }, 0).toFixed(2); 
    };

    
    const handleContinueShopping = (e) => {
        e.preventDefault();
        onContinueShopping(); 
    };

    
    const handleCheckoutShopping = () => {
        alert('Functionality to be added for future reference');
    };

    
    const handleIncrement = (item) => {
        dispatch(updateQuantity({
            name: item.name,
            quantity: item.quantity + 1
        }));
    };

    
    const handleDecrement = (item) => {
        if (item.quantity === 1) {
            dispatch(removeItem(item.name));
        } else {
            dispatch(updateQuantity({
                name: item.name,
                quantity: item.quantity - 1
            }));
        }
    };


    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    
    const calculateTotalCost = (item) => {
        const cost = parseFloat(item.cost.replace('$', ''));
        return (cost * item.quantity).toFixed(2);
    };

    
    const calculateTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>
                Total Cart Amount: ${calculateTotalAmount()}
                <span className="total-items">({calculateTotalItems()} items)</span>
            </h2>

            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost} per unit</div>
                            <div className="cart-item-quantity">
                                <button
                                    className="cart-item-button cart-item-button-dec"
                                    onClick={() => handleDecrement(item)}
                                >
                                    -
                                </button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button
                                    className="cart-item-button cart-item-button-inc"
                                    onClick={() => handleIncrement(item)}
                                >
                                    +
                                </button>
                            </div>
                            <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                            <button
                                className="cart-item-delete"
                                onClick={() => handleRemove(item)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'>
                Total Items: {calculateTotalItems()}
            </div>

            <div className="continue_shopping_btn">
                <button
                    className="get-started-button"
                    onClick={handleContinueShopping}
                >
                    Continue Shopping
                </button>
                <br />
                <button
                    className="get-started-button1"
                    onClick={handleCheckoutShopping}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItem;




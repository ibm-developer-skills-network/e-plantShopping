import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onRemove, onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        return cart.reduce((accumulator, currentValue) => accumulator + (parseInt(currentValue.cost.replace("$", "")) * currentValue.quantity), 0)
    };

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
        const cost = item.cost.replace("$", "")
        return parseInt(cost) * item.quantity
    };

    const handleContinueShopping = (e) => {
        onContinueShopping(e)
    };

    const handleCheckout = (e) => {
        alert("Checkout")
    }

    const handleIncrement = (item) => {
        let product = cart.find((product) => product.name == item.name)
        if (product) {
            dispatch(updateQuantity({
                name: product.name,
                quantity: product.quantity + 1
            }))
        }
    };

    const handleDecrement = (item) => {
        let product = cart.find((product) => product.name == item.name)
        if (product) {
            if (product.quantity === 1) {
                handleRemove(item)
            } else {
                dispatch(updateQuantity({
                    name: product.name,
                    quantity: product.quantity - 1
                }))
            }
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name))
        onRemove(item.name)
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {
                    cart.map(item => (
                        <div className="cart-item" key={item.name}>
                            <img className="cart-item-image" src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                                <div className="cart-item-name">{item.name}</div>
                                <div className="cart-item-cost">{item.cost}</div>
                                <div className="cart-item-quantity">
                                    <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                                    <span className="cart-item-quantity-value">{item.quantity}</span>
                                    <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                                </div>
                                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
                <br />
                <button className="get-started-button1" onClick={(e) => handleCheckout(e)}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();


    const parseItemCostToInteger = (itemCost) => {
        /*
            Remove currency symbol before multiplication.
            Otherwise, NaN returned.
            Improve in future: Use regex to remove all possible currency symbols?
        */
        return parseInt(itemCost.replace('$', ''), 10);
    };

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        let totalCost = 0;

        cart.forEach((item) => {
            const itemCost = parseItemCostToInteger(item.cost);
            totalCost += itemCost * item.quantity;
        });

        return totalCost;
    };

    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    const handleIncrement = (item) => {
        const updatedItem = { ...item };
        updatedItem.quantity++;
        dispatch(updateQuantity(updatedItem));
    };

    const handleDecrement = (item) => {
        const updatedItem = { ...item };

        if (updatedItem.quantity == 1) {
            // Remove item if number of items gets decremented to 0
            dispatch(removeItem(updatedItem));
        } else {
            updatedItem.quantity--;
            dispatch(updateQuantity(updatedItem));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
        let totalCost = 0;
        const itemCost = parseItemCostToInteger(item.cost);
        totalCost = item.quantity * itemCost;

        return totalCost;
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map(item => (
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
                ))}
            </div>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
                <br />
                <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;


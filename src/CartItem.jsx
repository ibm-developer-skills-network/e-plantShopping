import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const calculateTotalAmount = () => {
        return items.reduce((total, item) => total + item.quantity * item.cost, 0);
    };

    const calculateTotalCost = (item) => {
        return item.quantity * item.cost;
    };

    const handleContinueShopping = () => {
        onContinueShopping();
    };

    const handleCheckoutShopping = () => {
        alert('Functionality to be added for future reference');
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity === 1) {
            dispatch(removeItem(item.name));
        } else {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        }
    };

    const handleRemove = (name) => {
        dispatch(removeItem(name));
    };

    return (
        <div>
            <h2>Cart Items</h2>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
            <div className="cart-items">
                {items.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>Unit Cost:${item.cost}</p>
                            <p>Subtotal: ${calculateTotalCost(item)}</p>
                            <div className="quantity-control">
                                <button onClick={() => handleDecrement(item)}>-</button>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    readOnly
                                />
                                <button onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <button onClick={() => handleRemove(item.name)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Total Amount: ${calculateTotalAmount()}</h3>
            <button onClick={handleCheckoutShopping}>Checkout</button>
        </div>
    );
};

export default CartItem;

import React from 'react';
import './CartList.css';

function CartList({ cartItems, onIncrease, onDecrease, onRemove }) {
    // Calculate total cost for the cart
    const totalCost = cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);

    return (
        <div className="cart-list-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Add some plants!</p>
            ) : (
                <div className="cart-list">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <p>Unit Price: ${item.cost}</p>
                                <p>Total: ${item.cost * item.quantity}</p>
                                <div className="cart-item-quantity">
                                    <button onClick={() => onDecrease(index)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => onIncrease(index)}>+</button>
                                </div>
                            </div>
                            <button
                                className="remove-item-button"
                                onClick={() => onRemove(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h2>Total Cost: ${totalCost}</h2>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartList;

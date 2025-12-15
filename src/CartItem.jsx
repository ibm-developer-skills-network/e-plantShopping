import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, addItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // ✅ total del carrito (algoritmo requerido)
    const calculateTotalAmount = () => {
        let total = 0;

        cart.forEach(item => {
            const price = parseFloat(item.cost.substring(1)); // "$10.00" -> 10
            total += price * item.quantity;
        });

        return total.toFixed(2);
    };

    // ✅ Continue shopping (llama al padre)
    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    // ✅ Checkout placeholder
    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    // ✅ Increment (updateQuantity; si no existe, addItem)
    const handleIncrement = (item) => {
        const exists = cart.some(i => i.name === item.name);

        if (exists) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
        } else {
            dispatch(addItem({ ...item, quantity: 1 }));
        }
    };

    // ✅ Decrement (si llega a 0, removeItem)
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem({ name: item.name }));
        }
    };

    // ✅ Remove item completely
    const handleRemove = (item) => {
        dispatch(removeItem({ name: item.name }));
    };

    // ✅ subtotal por item
    const calculateTotalCost = (item) => {
        const price = parseFloat(item.cost.substring(1));
        return (price * item.quantity).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>
                Total Cart Amount: ${calculateTotalAmount()}
            </h2>

            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />

                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost}</div>

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

                            <div className="cart-item-total">
                                Total: ${calculateTotalCost(item)}
                            </div>

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

            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={handleContinueShopping}>
                    Continue Shopping
                </button>
                <br />
                <button className="get-started-button1" onClick={handleCheckoutShopping}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItem;

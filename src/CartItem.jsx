import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

// CartItem component receives a prop to continue shopping
const CartItem = ({ onContinueShopping }) => {

    // Access cart items from Redux store
    const cart = useSelector(state => state.cart.items);

    // Dispatch is used to send actions to Redux
    const dispatch = useDispatch();
  
    // 🔢 Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        let total = 0;

        // Loop through each item in cart
        cart.forEach((item) => {
            // Remove '$' from cost and multiply with quantity
            total += parseFloat(item.cost.substring(1)) * item.quantity;
        });

        return total;
    };

    // 🔙 Handle continue shopping button click
    const handleContinueShopping = (e) => {
        onContinueShopping(e); // Call parent function
    };

    // ➕ Increase quantity of an item
    const handleIncrement = (item) => {
        dispatch(
            updateQuantity({
                name: item.name,
                quantity: item.quantity + 1
            })
        );
    };

    // ➖ Decrease quantity OR remove if quantity = 1
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(
                updateQuantity({
                    name: item.name,
                    quantity: item.quantity - 1
                })
            );
        } else {
            dispatch(removeItem(item.name)); // remove item completely
        }
    };

    // ❌ Remove item from cart
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    // 🛒 Checkout button handler
    const handleCheckoutShopping = (e) => {
        console.log('Checkout functionality coming soon.');
        alert('Checkout functionality coming soon! Hope you enjoyed our services.');
    };

    // 💰 Calculate total cost for a single item
    const calculateTotalCost = (item) => {
        return parseFloat(item.cost.substring(1)) * item.quantity;
    };

    return (
        <div className="cart-container">

            {/* 🧾 Display total cart amount */}
            <h2 style={{ color: 'black' }}>
                Total Cart Amount: ${calculateTotalAmount()}
            </h2>

            {/* 📦 Loop through all cart items */}
            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>

                        {/* 🖼️ Product Image */}
                        <img
                            className="cart-item-image"
                            src={item.image}
                            alt={item.name}
                        />

                        <div className="cart-item-details">

                            {/* 📌 Product Name */}
                            <div className="cart-item-name">{item.name}</div>

                            {/* 💵 Product Price */}
                            <div className="cart-item-cost">{item.cost}</div>

                            {/* 🔢 Quantity Controls */}
                            <div className="cart-item-quantity">

                                {/* Decrement Button */}
                                <button
                                    className="cart-item-button cart-item-button-dec"
                                    onClick={() => handleDecrement(item)}
                                >
                                    -
                                </button>

                                {/* Current Quantity */}
                                <span className="cart-item-quantity-value">
                                    {item.quantity}
                                </span>

                                {/* Increment Button */}
                                <button
                                    className="cart-item-button cart-item-button-inc"
                                    onClick={() => handleIncrement(item)}
                                >
                                    +
                                </button>
                            </div>

                            {/* 💰 Total cost for this item */}
                            <div className="cart-item-total">
                                Total: ${calculateTotalCost(item)}
                            </div>

                            {/* ❌ Delete item */}
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

            {/* (Empty div - can be removed if unused) */}
            <div
                style={{ marginTop: '20px', color: 'black' }}
                className='total_cart_amount'
            ></div>

            {/* 🔙 Continue Shopping Button */}
            <div className="continue_shopping_btn">
                <button
                    className="get-started-button"
                    onClick={(e) => handleContinueShopping(e)}
                >
                    Continue Shopping
                </button>
                <br />
            </div>

            {/* 🛒 Checkout Button */}
            <button
                className="get-started-button1"
                onClick={(e) => handleCheckoutShopping(e)}
            >
                Checkout
            </button>
        </div>
    );
};

export default CartItem;
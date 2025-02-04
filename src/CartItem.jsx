import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // ✅ Calculate total cost for all items in cart
  const calculateTotalAmount = (cartItems) => {
    let total = 0;
    for (let item of cartItems) {
        total += item.quantity * parseFloat(item.cost.replace("$", ""));  // Fix: Convert cost to number
    }
    return total.toFixed(2);  // Ensure two decimal places
};

  // ✅ Calculate total quantity of items in cart
  const calculateTotalQuantity = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // ✅ Placeholder function for checkout
  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  // ✅ Return to shop page
  const handleContinueShopping = () => {
    if (onContinueShopping) {
      onContinueShopping(); // Calls function from parent component
    }
  };

  // ✅ Increase item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // ✅ Decrease item quantity or remove if it reaches 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // ✅ Remove item from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // ✅ Calculate subtotal per item
  const calculateTotalCost = (item) => {
    return item.quantity * item.cost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: ${calculateTotalAmount(cart)}
      </h2>
      <h3 style={{ color: "black" }}>Total Items: {calculateTotalQuantity(cart)}</h3>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
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
      <div style={{ marginTop: "20px", color: "black" }} className="total_cart_amount"></div>
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
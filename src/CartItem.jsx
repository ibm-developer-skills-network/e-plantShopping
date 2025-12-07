import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import { useNavigate } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const price = parseFloat(item.cost.substring(1)); // Remove the dollar sign and convert to number
      total += price * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    navigate("/plants");
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        amount: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          amount: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  const handleCheckout = () => {
    alert(
      "Thank you for your purchase! Your order total is $" +
        calculateTotalAmount()
    );
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 style={{ color: "black", textAlign: "center", marginTop: "50px" }}>
          Your Shopping Cart is Empty
        </h2>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            className="get-started-button"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>
        Shopping Cart
      </h2>

      <div className="cart-summary-header">
        <div className="cart-summary-info">
          <span>
            Total Items: <strong>{totalItems}</strong>
          </span>
          <span>
            Total Amount: <strong>${calculateTotalAmount()}</strong>
          </span>
        </div>
      </div>

      <div className="cart-items-wrapper">
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-description">{item.description}</div>
              <div className="cart-item-cost">{item.cost} each</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal ({totalItems} items):</span>
            <span>${calculateTotalAmount()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>$5.99</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>
              ${(parseFloat(calculateTotalAmount()) + 5.99).toFixed(2)}
            </span>
          </div>
        </div>

        <div className="cart-buttons">
          <button
            className="continue-shopping-btn"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

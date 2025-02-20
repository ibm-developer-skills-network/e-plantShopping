import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItems = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateSubtotal = (item) => parseFloat(item.cost.substring(1)) * item.quantity;

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  const handleIncrement = (name, quantity) => {
    dispatch(updateQuantity({ name, quantity: quantity + 1 }));
  };

  const handleDecrement = (name, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ name, quantity: quantity - 1 }));
    } else {
      dispatch(removeItem({ name }));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem({ name }));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.name} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: {item.cost}</p>
              <p>Subtotal: ${calculateSubtotal(item).toFixed(2)}</p>

              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item.name, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.name, item.quantity)}>+</button>
              </div>

              <button onClick={() => handleRemove(item.name)}>Remove</button>
            </div>
          ))}

          <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>

          <button onClick={onContinueShopping}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartItems;

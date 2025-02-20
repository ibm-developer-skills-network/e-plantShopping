import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice"; // Import Redux actions

const CartItems = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();

  // Function to calculate subtotal for an item
  const calculateSubtotal = (item) => {
    return parseFloat(item.cost.substring(1)) * item.quantity;
  };

  // Function to calculate the total amount of the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  // Handle increasing the quantity of an item
  const handleIncrement = (name, quantity) => {
    dispatch(updateQuantity({ name, quantity: quantity + 1 }));
  };

  // Handle decreasing the quantity of an item
  const handleDecrement = (name, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ name, quantity: quantity - 1 }));
    } else {
      dispatch(removeItem({ name })); // Remove item if quantity is 0
    }
  };

  // Handle removing an item completely
  const handleRemove = (name) => {
    dispatch(removeItem({ name }));
  };

  // Handle checkout (not implemented yet)
  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
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

              {/* Quantity Controls */}
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item.name, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.name, item.quantity)}>+</button>
              </div>

              <button onClick={() => handleRemove(item.name)}>Remove</button>
            </div>
          ))}

          {/* Total Price Display */}
          <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>

          {/* Continue Shopping Button */}
          <button onClick={onContinueShopping}>Continue Shopping</button>

          {/* Checkout Button */}
          <button onClick={handleCheckoutShopping}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartItems;

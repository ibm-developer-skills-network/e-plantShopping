import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity, addItem } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  // Access items from Redux store
  const items = useSelector((state) => state.cart.items);

  // Calculate total cost of all items
  function calculateTotalAmount(cart) {
    let total = 0;

    cart.forEach((item) => {
      const quantity = item.quantity;
      const costNumber = parseFloat(item.cost.substring(1));
      total += costNumber * quantity;
    });

    return total;
  }

  const totalAmount = calculateTotalAmount(items);

  // Increment quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        amount: item.quantity + 1,
      })
    );
  };

  // Decrement quantity
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

  // Remove item
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Continue shopping (your merged code)
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  // Checkout placeholder
  const handleCheckoutShopping = () => {
    alert("Checkout functionality will be added at a later date.");
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => {
            const costNumber = parseFloat(item.cost.substring(1));
            const subtotal = costNumber * item.quantity;

            return (
              <div key={item.name} className="cart-item">
                <h3>{item.name}</h3>
                <p>Unit Price: {item.cost}</p>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>

                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => handleRemove(item)}>
                  Remove
                </button>
              </div>
            );
          })}

          <h3>Total: ${totalAmount.toFixed(2)}</h3>

          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button onClick={handleCheckoutShopping}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartItem;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';  // Import removeItem and updateQuantity actions

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);  // Select items from Redux state
  const dispatch = useDispatch();

  const handleRemoveItem = (name) => {
    dispatch(removeItem(name));  // Dispatch removeItem action with item name
  };

  const handleUpdateQuantity = (name, quantity) => {
    dispatch(updateQuantity({ name, quantity }));  // Dispatch updateQuantity action with name and quantity
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>{item.cost}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.name, Number(e.target.value))}
            />
            <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
}

export default CartItem;

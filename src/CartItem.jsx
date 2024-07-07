import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreatSlice';
import './CartItem.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (total, item) => total + +item.cost.match(/\d+/) * item.quantity,
    0
  );
  const handleUpdateQuantity = (plant, diff) => {
    dispatch(updateQuantity({ plant, diff }));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${totalAmount}</h2>
      <div>
        {cartItems.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleUpdateQuantity(item, -1)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleUpdateQuantity(item, 1)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${item.quantity * +item.cost.match(/\d+/)}</div>
              <button className="cart-item-delete" onClick={() => handleRemoveItem(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button">Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;



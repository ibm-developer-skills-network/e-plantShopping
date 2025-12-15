import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
import ProductModal from './ProductModal';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    console.log("Start");
    let total = 0;
    cart.forEach((item, index) => {
          console.log("ITEM", item);
          console.log("ITEM COST", parseFloat(item.cost.substring(1)));
      total += parseFloat(item.cost.substring(1)) * item.quantity;
    });
    return total;
  };


  const handleContinueShopping = (e) => {
    if (typeof onContinueShopping === "function") {
      onContinueShopping(e);
    }
  };

  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    if(item.quantity > 0) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } 
  };

  const handleRemove = (item) => {
    setItemToDelete(item);
    setShowModal(true);
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let total = 0;
    if(item.quantity > 0) {
      total = parseFloat(item.cost.substring(1)) * item.quantity;
    }
    return total;
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleConfirm = () => {
    if(itemToDelete) {
      dispatch(removeItem(itemToDelete));
    }
    setItemToDelete(null);
    setShowModal(false);
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button 
                className={`cart-item-delete ${showModal ? 'btn-disabled' : ''}`}
                onClick={() => handleRemove(item)}>
                  Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={() => handleCheckoutShopping()}>Checkout</button>
        {showModal && <ProductModal onConfirm={handleConfirm} onCancel={handleCancel}/>}
      </div>
    </div>
  );
};

export default CartItem;



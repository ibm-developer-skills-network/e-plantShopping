import React from 'react';  
import { useSelector, useDispatch } from 'react-redux';  
import { removeItem, updateQuantity } from './CartSlice';  
import './CartItem.css';  

const CartItem = ({ onContinueShopping }) => {  
  const cart = useSelector(state => state.cart.items);  
  const dispatch = useDispatch();  

  // Calculate total amount for all products in the cart  
  const calculateTotalAmount = () => {  
    return cart.reduce((total, item) => total + calculateTotalCost(item), 0);  
  };  

  const handleContinueShopping = () => {  
    // Call the function passed from parent to continue shopping  
    onContinueShopping();  
  };  

  const handleIncrement = (item) => {  
    dispatch(updateQuantity(item.id, item.quantity + 1));  
  };  

  const handleDecrement = (item) => {  
    if (item.quantity > 1) {  
      dispatch(updateQuantity(item.id, item.quantity - 1));  
    } else {  
      // If quantity is 1, remove item from the cart  
      dispatch(removeItem(item.id));  
    }  
  };  

  const handleRemove = (item) => {  
    dispatch(removeItem(item.id));  
  };  

  // Calculate total cost based on quantity for an item  
  const calculateTotalCost = (item) => {  
    return item.cost * item.quantity;  
  };  

  const handleCheckoutShopping = () => {  
    alert('Functionality to be added for future reference');  
  };  

  return (  
    <div className="cart-container">  
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>  
      <div>  
        {cart.map(item => (  
          <div className="cart-item" key={item.id}>  
            <img className="cart-item-image" src={item.image} alt={item.name} />  
            <div className="cart-item-details">  
              <div className="cart-item-name">{item.name}</div>  
              <div className="cart-item-cost">Unit Price: ${item.cost.toFixed(2)}</div>  
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
              <div className="cart-item-total">Subtotal: ${calculateTotalCost(item).toFixed(2)}</div>  
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
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>  
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
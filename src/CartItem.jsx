import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
import ProductList from './ProductList';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = (section) => {
    let totalCost = 0;
    if(section === "cart") {
      CartItem.array.forEach(element => {
        totalCost += item.cost * item.quantity;
        
      });  
    } else if (section === "plantsItems") {
totalCost += item.cost * item.quantity;
    }
 return totalCost;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(); 
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {  
    dispatch(updateQuantity(item.id, item.quantity + 1));  
  };

  const handleDecrement = (item) => {  
    if (item.quantity > 1) {  
      // Solo actualiza la cantidad si es mayor que 1  
      dispatch(updateQuantity(item.id, item.quantity - 1));  
    } else {  
      // Si la cantidad es 1, eliminar el artículo  
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
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity, clearCart } from './CartSlice';
import './CartItem.css';
 

const CartItem = ({ onContinueShopping }) => {

  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();


  const calculateTotalAmount = () => {
    const parseCost = (cost) => {
      return parseFloat(cost.replace(/[^0-9.-]+/g, '')) || 0;
    };
  
    // Calculate total amount based on the cart items
    return cart.reduce((total, item) => {
      const itemCost = parseCost(item.cost);

      return total + (itemCost * item.quantity);

    }, 0);

  };
  
  const calculateTotalCost = (item) => {
    const parseCost = (cost) => {
      return parseFloat(cost.replace(/[^0-9.-]+/g, '')) || 0;
    };
  
      const itemCost = parseCost(item.cost);
      return (itemCost * item.quantity);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping();
  };

  const handleIncrement = (item) => {
    
    if (item) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
      }
      
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
      } else {
        dispatch(removeItem(item))
      }

  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
    
  };




  const handleCheckoutShopping = (e) => {
    e.preventDefault();

    /* In Redux, you cannot directly manipulate the state; 
    you have to use actions and reducers  

    I tried directly manipulating the cart (state.items) and it error
    */

  alert('Thank you for the purchase !');

  dispatch(clearCart());

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
                <button className="cart-item-button

                cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>

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
        <button className="get-started-button" onClick={(e) => onContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;




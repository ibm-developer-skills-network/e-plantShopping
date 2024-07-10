import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseUpdateQuantity,DecresUpdateQuantity } from './CreatSlice';
import './CartItem.css';

const Cart = ({ onContinueShopping,prantCallBack }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
console.log(cart)
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    // cart.reduce((total, item) => total + item.price * item.quantity, 0);
    // const one = cart.map((res)=> parseInt(res.cost.slice(1,10)))
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0)
    
  };


  const handleContinueShopping = (e) => {
   prantCallBack(false)
  };



  const handleIncrement = (product) => {
    dispatch(increaseUpdateQuantity(product));

  };

  const handleDecrement = (product) => {
    
    DecresUpdateQuantity(product.quantity).payload===2?dispatch(DecresUpdateQuantity(product)):console.log("s")
   
  };

  const handleRemove = (item) => {
    // console.log(item)
     dispatch(removeItem(item));

  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    // console.log(item)
    return item.cost*item.quantity

  };
  const handleCheckoutShopping = (e) => {
    alert('Coming Soon');
  };
  console.log()
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
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;



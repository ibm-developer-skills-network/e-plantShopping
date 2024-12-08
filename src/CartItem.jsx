import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  //Puccetti nicola implemented body of function calculateTotalAmount
  const calculateTotalAmount = () => {
    cart.reduce((total,item)=> total+ item.cost*item.quantity,0)
  };

  //Puccetti Nicola through handleContinueShopping called onContinueShopping to passing it the event
  const handleContinueShopping = (e) => {
    e.preventDefault();
   onContinueShopping(e);
  };


//Puccetti nicola implemented body of handleIncremente function
  const handleIncrement = (item) => {
    const newItem={...item};
    newItem.quantity++;
    dispatch(updateQuantity(newItem));
  };

//Puccetti nicola implemented body of handleIncremente function
  const handleDecrement = (item) => {
   
    if(item.quantity>1){
        const newItem={...item};
        newItem.quantity--;
        dispatch(updateQuantity(newItem));
   }
   else{
        dispatch(removeItem(item));
   }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
 /*Puccetti Nicola implemented function 
  *and added control for debugging by console.log
  *applied filter for remove spacial character 
  *this allow the conversion from string by number
  *with objects cost provided like string $price
  */
  const calculateTotalCost = (item) => {
    console.log(typeof item.quantity + "initial value: "+item.quantity);
    console.log(typeof item.cost+ "initial value: "+item.cost);
    let uquantity;
    let ucost;
    
    if(typeof item.quantity === 'string'){
        uquantity = parseFloat(item.quantity);
    }
    else if(typeof item.quantity === 'number'){
        uquantity = Number(item.quantity);
        console.log("typeof uquantity: "+typeof uquantity);
    }
    else{
        console.log("the value item.quantity isn't numbers and is not possible convert it");
    }
    if(typeof item.cost === 'string'){
        const tempValue=item.cost.replace('$','');
        ucost = parseFloat(tempValue);
        console.log("typeof ucost: "+typeof ucost)
    }
    else if(typeof item.cost === 'number'){
        ucost = Number(item.cost)
    }
    else{
        console.log("the value item.cost isn't numbers and is not possible convert it");
    }
    if((typeof ucost === 'number') && (typeof uquantity === 'number')){
        console.log("final if typeof ucost: "+typeof ucost+" value: "+ucost);
        console.log("final if typeof uquantity: "+typeof uquantity+" value: "+uquantity);
        const total = Number(uquantity*ucost);
    return total;
    }
    else{
        console.log("the process of check and conver of item.quantity and item.cost is failed !!!")
        console.log("final else typeof ucost: "+typeof ucost);
        console.log("final else typeof uquantity: "+typeof uquantity);
        const total = NaN;
        return total;
    }
    
  };

  const handleCheckOutShopping = (e)=>{
    e.preventDefault();
    alert("Functionality to be added for future reference");
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
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e)=>handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e)=>handleCheckOutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;



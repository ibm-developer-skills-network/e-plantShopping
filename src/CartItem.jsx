import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const CartItems = ({ cart, setCart }) => {
    const [cartIconQuantity, setCartIconQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
  
  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.quantity * item.cost;
  };

  // Calculate total amount for all products in the cart
const calculateTotalAmount = () => {
  return cart.reduce((total, item) => {
    return total + (item.quantity * item.cost);
  }, 0);
};

const updateCartDisplay = () => {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartIconQuantity(totalQuantity);

    cart.forEach(item => {
      item.subtotal = calculateTotalCost(item);
    });

    const totalCost = calculateTotalAmount();
    setTotalCost(totalCost);
  };

const handleContinueShopping = (e) => {
  if (onContinueShopping) {
    onContinueShopping();
  }
};

const handleIncrement = (item) => {
  dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  updateCartDisplay();
};

const handleDecrement = (item) => {
  if (item.quantity > 1) {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  } else {
    dispatch(removeItem(item.name)); // Assuming removeItem takes the item's name as an argument
  }
  updateCartDisplay();
};

const handleRemove = (item) => {
  dispatch(removeItem(item.name)); // Assuming removeItem takes the item's name as an argument
  updateCartDisplay();
};



  const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};

useEffect(() => {
    updateCartDisplay();
  }, [cart]);
  return (
    <div>
      <div className="navbar">
        <div className="cart-icon">
          Cart ({cartIconQuantity})
        </div>
      </div>

    </div>
  );
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



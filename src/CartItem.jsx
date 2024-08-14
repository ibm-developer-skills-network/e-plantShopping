import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();

  // State management to track which products are added to the cart
  const [addedToCart, setAddedToCart] = useState({});

  // useMemo to optimize total amount calculation
  const totalAmount = useMemo(() => {
    return cart
      .reduce((total, item) => {
        return total + parseFloat(item.cost.replace('$', '')) * item.quantity;
      }, 0)
      .toFixed(2);
  }, [cart]);

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    setAddedToCart((prev) => ({
      ...prev,
      [item.name]: true,
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
      setAddedToCart((prev) => ({
        ...prev,
        [item.name]: false,
      }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
    setAddedToCart((prev) => ({
      ...prev,
      [item.name]: false,
    }));
  };

  const calculateTotalCost = (item) => {
    try {
      const cost = parseFloat(item.cost.replace('$', ''));
      if (isNaN(cost)) {
        throw new Error(`Invalid cost value for item ${item.name}: ${item.cost}`);
      }
      return (cost * item.quantity).toFixed(2);
    } catch (error) {
      console.error(error.message);
      return '0.00';
    }
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h2 style={{ color: 'black' }}>Your cart is empty</h2>
      ) : (
        <>
          <h2 style={{ color: 'black' }}>Total Cart Amount: ${totalAmount}</h2>
          <div>
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">{item.cost}</div>
                  <div className="cart-item-quantity">
                    <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>
                      -
                    </button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                  <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                    Delete
                  </button>
                  {/* Show whether the item is added to the cart */}
                  {addedToCart[item.name] && <div>Added to Cart</div>}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="continue_shopping_btn">
        <button 
          className="get-started-button" 
          onClick={() => {
            if (typeof onContinueShopping === 'function') {
              onContinueShopping();
            } else {
              console.error("onContinueShopping is not a function");
            }
          }}
        >
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

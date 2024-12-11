import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
        const itemCost = parseFloat(item.cost.replace('$', ''))
        return total + (itemCost * item.quantity); // Multiplica el costo por la cantidad
    }, 0);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      // Si la cantidad es mayor que 1, solo se decrementa
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Si la cantidad es 1, eliminar el artículo
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.replace('$', '').trim());
    const quantity = parseInt(item.quantity, 10);

    if (isNaN(cost) || isNaN(quantity)) {
        console.error(`Invalid cost or quantity for item: ${JSON.stringify(item)}`);
        return 0;  
    }
    return cost * quantity;
  };

  return (
    <div className="cart-container">
        <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
        <div>
                {cart.map(item => (
            <div className="cart-item" key={item.name}>
                {/* Contenedor de imagen con cantidad sobrepuesta */}
                <div className="cart-item-image-container">
                <img className="cart-item-image" src={item.image} alt={item.name} />
                {/* Mostrar la cantidad sobre la imagen */}
                <div className="item-quantity-overlay">{item.quantity}</div>
                </div>
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

export default CartItem;



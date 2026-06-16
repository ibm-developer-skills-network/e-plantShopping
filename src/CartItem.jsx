import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Your Shopping Cart</h2>
      <h3 style={{ textAlign: 'center', color: '#2E7D32' }}>Total Cart Amount: ${calculateTotalAmount()}</h3>
      
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '15px 0' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
              <div style={{ flex: 1, marginLeft: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                <p style={{ margin: 0, color: '#666' }}>Unit Price: ${item.cost}</p>
                <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>Subtotal: ${item.cost * item.quantity}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => handleDecrement(item)} style={{ padding: '5px 10px' }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)} style={{ padding: '5px 10px' }}>+</button>
                <button onClick={() => dispatch(removeItem(item.name))} style={{ marginLeft: '15px', color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <button onClick={onContinueShopping} style={{ padding: '10px 20px', backgroundColor: '#666', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Continue Shopping
        </button>
        <button onClick={() => alert('Coming Soon')} disabled={cartItems.length === 0} style={{ padding: '10px 20px', backgroundColor: '#2E7D32', color: '#fff', border: 'none', borderRadius: '4px', cursor: cartItems.length === 0 ? 'default' : 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
import React from 'react';
import { useSelector } from 'react-redux';
import './ProductList.css';

const Checkout = ({ onBack }) => {
  const cart = useSelector((s) => s.cart.items || []);

  const total = cart.reduce((sum, it) => {
    const price = parseFloat(String(it.cost).replace(/[^0-9.]/g, '')) || 0;
    const qty = it.quantity || 1;
    return sum + price * qty;
  }, 0);

  const formattedTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);

  const handleExternalCheckout = () => {
    // Open a dummy (placeholder) checkout page in a new tab
    window.open('https://example.com/one-shopping', '_blank', 'noopener');
  };

  return (
    <div className="product-grid" style={{ padding: 40 }}>
      <div style={{ maxWidth: 900, width: '100%', background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
        <h2>Checkout (Demo)</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map((it) => (
                <li key={it.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <div>
                    <strong>{it.name}</strong>
                    <div style={{ fontSize: 13, color: '#666' }}>{it.quantity} × {it.cost}</div>
                  </div>
                  <div>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((parseFloat(String(it.cost).replace(/[^0-9.]/g, '')) || 0) * (it.quantity || 1))}</div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>Total:</strong>
              <strong>{formattedTotal}</strong>
            </div>
          </div>
        )}

        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <button className="product-button" onClick={onBack}>Back to Cart</button>
          <button className="product-button" onClick={handleExternalCheckout}>Proceed to Dummy Shop</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

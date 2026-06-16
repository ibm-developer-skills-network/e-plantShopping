import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

const plantCategories = [
  {
    category: "Air Purifying",
    plants: [
      { name: "Snake Plant", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", description: "Produces oxygen at night.", cost: 15 },
      { name: "Spider Plant", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42", description: "Filters toxins effectively.", cost: 12 },
      { name: "Peace Lily", image: "https://images.unsplash.com/photo-1597055181300-e3633a207518", description: "Stunning blooms, filters air.", cost: 18 },
      { name: "Boston Fern", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4", description: "Thrives in humid conditions.", cost: 14 },
      { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921", description: "Medicinal uses and purifies air.", cost: 10 },
      { name: "English Ivy", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85", description: "Clears mold particles.", cost: 13 }
    ]
  },
  {
    category: "Low Light Tolerance",
    plants: [
      { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643c2a9a9361", description: "Thrives on sheer neglect.", cost: 20 },
      { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b", description: "Extremely rugged and durable.", cost: 22 },
      { name: "Pothos", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974", description: "Beautiful cascading vines.", cost: 12 },
      { name: "Chinese Evergreen", image: "https://images.unsplash.com/photo-1616690248560-6060c4927bdf", description: "Thrives in dim office spots.", cost: 16 },
      { name: "Parlor Palm", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78", description: "Compact indoor palm look.", cost: 25 },
      { name: "Anthurium", image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90", description: "Adds exotic pops of color.", cost: 19 }
    ]
  },
  {
    category: "Beginner Friendly",
    plants: [
      { name: "Jade Plant", image: "https://images.unsplash.com/photo-1599599810675-9e66bf2382e7", description: "Brings luck and resilience.", cost: 15 },
      { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1525498128493-380d1990a112", description: "Glossy, deep dark leaves.", cost: 18 },
      { name: "Heartleaf Philodendron", image: "https://images.unsplash.com/photo-1599599810694-0ba0f488f413", description: "Fast growing and versatile.", cost: 11 },
      { name: "Monstera Deliciosa", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b", description: "Iconic splits in green foliage.", cost: 30 },
      { name: "String of Pearls", image: "https://images.unsplash.com/photo-1580126786835-180b59b56f8f", description: "Unique cascading succulent peas.", cost: 14 },
      { name: "Calathea", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4", description: "Stunning decorative patterns.", cost: 17 }
    ]
  }
];

function ProductList({ onNavigateHome }) {
  const [view, setView] = useState('plants'); // 'plants', 'cart', 'about'
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#2E7D32', color: '#fff' }}>
        <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={onNavigateHome}>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => setView('plants')}>Plants</span>
          <span style={{ cursor: 'pointer' }} onClick={() => setView('about')}>About Us</span>
          <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setView('cart')}>
            Cart 🛒 ({totalItemCount})
          </span>
        </div>
      </nav>

      {view === 'about' && <AboutUs />}
      
      {view === 'cart' && <CartItem onContinueShopping={() => setView('plants')} />}

      {view === 'plants' && (
        <div style={{ padding: '20px' }}>
          {plantCategories.map((cat, idx) => (
            <div key={idx} style={{ marginBottom: '40px' }}>
              <h3 style={{ borderBottom: '2px solid #2E7D32', paddingBottom: '5px' }}>{cat.category}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '15px' }}>
                {cat.plants.map((plant, pIdx) => {
                  const isAdded = cartItems.some(item => item.name === plant.name);
                  return (
                    <div key={pIdx} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                      <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
                      <h4>{plant.name}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#666' }}>{plant.description}</p>
                      <p style={{ fontWeight: 'bold' }}>${plant.cost}</p>
                      <button 
                        onClick={() => dispatch(addItem(plant))}
                        disabled={isAdded}
                        style={{ backgroundColor: isAdded ? '#ccc' : '#4CAF50', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: isAdded ? 'default' : 'pointer' }}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
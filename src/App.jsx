import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';

export default function App() {
    const [showCart, setShowCart] = useState(false);

    const handleOpenCart = () => setShowCart(true);
    const handleContinueShopping = () => setShowCart(false);

    return (
        <div>
            {showCart ? (
                <CartItem onContinueShopping={handleContinueShopping} />
            ) : (
                <ProductList onOpenCart={handleOpenCart} />
            )}
        </div>
    );
}

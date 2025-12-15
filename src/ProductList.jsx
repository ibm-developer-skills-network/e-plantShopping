import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = ({ onOpenCart }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    // ✅ total de unidades en carrito (icono)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // ⚠️ EJEMPLO (si ya tienes productos reales, reemplaza este array por el tuyo)
    const products = [
        { name: 'Aloe Vera', cost: '$10.00', image: 'https://via.placeholder.com/220x160' },
        { name: 'Monstera', cost: '$15.50', image: 'https://via.placeholder.com/220x160' },
        { name: 'Snake Plant', cost: '$12.25', image: 'https://via.placeholder.com/220x160' },
    ];

    const alreadyInCart = (name) => cart.some(i => i.name === name);

    const handleAddToCart = (product) => {
        dispatch(addItem({ ...product, quantity: 1 }));
    };

    return (
        <div className="product-list-container">
            <header className="product-list-header">
                <h2>Plant Listing</h2>

                <button className="cart-button" onClick={onOpenCart}>
                    🛒 Cart ({totalItems})
                </button>
            </header>

            <div className="product-grid">
                {products.map(product => {
                    const added = alreadyInCart(product.name);

                    return (
                        <div className="product-card" key={product.name}>
                            <img className="product-image" src={product.image} alt={product.name} />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-cost">{product.cost}</p>

                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(product)}
                                disabled={added}
                                style={{
                                    opacity: added ? 0.5 : 1,
                                    cursor: added ? 'not-allowed' : 'pointer',
                                }}
                            >
                                {added ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;

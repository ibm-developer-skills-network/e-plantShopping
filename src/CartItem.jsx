import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calcula o valor total de todos os itens no carrinho
    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => {
            // Remove o símbolo '$' e converte para número
            const cost = parseFloat(item.cost.replace('$', ''));
            return total + (cost * item.quantity);
        }, 0).toFixed(2); // Mantém 2 casas decimais
    };

    // Manipula o botão "Continuar Comprando"
    const handleContinueShopping = (e) => {
        e.preventDefault();
        onContinueShopping(); // Chama a função passada como prop
    };

    // Manipula o botão de checkout
    const handleCheckoutShopping = () => {
        alert('Functionality to be added for future reference');
    };

    // Incrementa a quantidade de um item
    const handleIncrement = (item) => {
        dispatch(updateQuantity({
            name: item.name,
            quantity: item.quantity + 1
        }));
    };

    // Decrementa a quantidade de um item
    const handleDecrement = (item) => {
        if (item.quantity === 1) {
            // Remove o item se a quantidade chegar a zero
            dispatch(removeItem(item.name));
        } else {
            dispatch(updateQuantity({
                name: item.name,
                quantity: item.quantity - 1
            }));
        }
    };

    // Remove um item do carrinho
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    // Calcula o custo total de um item específico
    const calculateTotalCost = (item) => {
        const cost = parseFloat(item.cost.replace('$', ''));
        return (cost * item.quantity).toFixed(2);
    };

    // Calcula a quantidade total de itens no carrinho
    const calculateTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>
                Total Cart Amount: ${calculateTotalAmount()}
                <span className="total-items">({calculateTotalItems()} items)</span>
            </h2>

            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost} per unit</div>
                            <div className="cart-item-quantity">
                                <button
                                    className="cart-item-button cart-item-button-dec"
                                    onClick={() => handleDecrement(item)}
                                >
                                    -
                                </button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button
                                    className="cart-item-button cart-item-button-inc"
                                    onClick={() => handleIncrement(item)}
                                >
                                    +
                                </button>
                            </div>
                            <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                            <button
                                className="cart-item-delete"
                                onClick={() => handleRemove(item)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'>
                Total Items: {calculateTotalItems()}
            </div>

            <div className="continue_shopping_btn">
                <button
                    className="get-started-button"
                    onClick={handleContinueShopping}
                >
                    Continue Shopping
                </button>
                <br />
                <button
                    className="get-started-button1"
                    onClick={handleCheckoutShopping}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItem;
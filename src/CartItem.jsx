import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const parseCostToNumber = (cost) => {
    // Protege a conversão: remove tudo que não for dígito/ponto e converte
    const numeric = parseFloat(String(cost).replace(/[^0-9.]/g, ''));
    return Number.isNaN(numeric) ? 0 : numeric;
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      const unit = parseCostToNumber(item.cost);
      total += unit * (item.quantity ?? 1);
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (typeof onContinueShopping === 'function') {
      onContinueShopping(e);
    }
  };

  const handleIncrement = (item) => {
    const newQty = (item.quantity ?? 1) + 1;
    dispatch(updateQuantity({ name: item.name, quantity: newQty }));
  };

  const handleDecrement = (item) => {
    const current = item.quantity ?? 1;
    if (current > 1) {
      const newQty = current - 1;
      dispatch(updateQuantity({ name: item.name, quantity: newQty }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Functionality to be added for future reference');
    // Exemplo: após implementar, você pode:
    // 1) enviar o pedido ao backend
    // 2) limpar o carrinho (clearCart)
    // 3) mostrar confirmação
  };

  const calculateTotalCost = (item) => {
    const unitPrice = parseCostToNumber(item.cost);
    const subtotal = unitPrice * (item.quantity ?? 1);
    return subtotal.toFixed(2);
  };

  // ===== Demonstração de uso de addItem no CartItem =====
  const handleAddSameItem = (item) => {
    dispatch(addItem({
      name: item.name,
      image: item.image,
      cost: item.cost,
      quantity: 1, // soma mais 1 ao item existente
    }));
  };

  const handleAddNewProduct = () => {
    // Adiciona um novo produto "exemplo" ao carrinho
    dispatch(addItem({
      name: 'Gift Wrap',
      image: 'https://via.placeholder.com/120x120?text=Wrap',
      cost: '$5.00',
      quantity: 1,
    }));
  };
  // =====================================================

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>

              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                  aria-label={`Diminuir quantidade de ${item.name}`}
                >
                  -
                </button>

                <span className="cart-item-quantity-value">{item.quantity ?? 1}</span>

                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                  aria-label={`Aumentar quantidade de ${item.name}`}
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>

              <div className="cart-item-actions">
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>

                {/* Botão extra (opcional): usa addItem para somar mais 1 do mesmo produto */}
                <button
                  className="cart-item-add"
                  onClick={() => handleAddSameItem(item)}
                >
                  Add one more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botão opcional: adicionar um novo produto de exemplo ao carrinho */}
      <div style={{ marginTop: '12px' }}>
        <button className="get-started-button2" onClick={handleAddNewProduct}>
          Add sample item (addItem)
        </button>
      </div>

      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount"></div>

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
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



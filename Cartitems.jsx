import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './path/to/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  const handleUpdateQuantity = (newQuantity) => {
    dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={() => handleUpdateQuantity(item.quantity + 1)}>Increase Quantity</button>
      <button onClick={() => handleUpdateQuantity(item.quantity - 1)}>Decrease Quantity</button>
    </div>
  );
};

export default CartItem;

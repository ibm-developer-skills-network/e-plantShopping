import { useDispatch } from 'react-redux';
import { addItem } from './path/to/CartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      {products.map(plant => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

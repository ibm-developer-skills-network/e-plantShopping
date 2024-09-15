import { useDispatch, useSelector } from 'react-redux';
import './ProductCard.css'
import { useState } from 'react';

import { addItem, updateQuantity } from './CartSlice';
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    return (
        <>
            <h2>{product.category}</h2>
            <div className="product-card--container">
                {product.plants.map((plant, index) => (
                    <div className="product-card" key={`${plant.name}-${index}`}>
                        <div className='product-image' >
                            <img src={plant.image} alt={plant.name} /></div>
                        {/* eslint-disable-next-line react/prop-types */}
                        <div className="app__service-card--detail">
                            <h3>{plant.name}</h3>
                            <p>{plant.description}</p>
                            <p style={{ fontWeight: "bold" }}>{plant.cost}</p>
                        </div>
                        <div className="app__service-card--actions">
                            <button disabled={isAddedToCart ? true : false}
                                onClick={(event) => {

                                    dispatch(addItem(plant));
                                    dispatch(updateQuantity({ id: plant.name, quantity: 1 }))
                                    event.target.disabled = true;
                                }
                                }
                            >Add to Cart</button>
                        </div>
                    </div>


                ))}
            </div>
        </>

    )
}

export default ProductCard;
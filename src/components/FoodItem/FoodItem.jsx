import React, { useContext} from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
 // const [itemCount, setItemCount] = useState(0);
  const{cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />

        {!cartItems[id] ? (
          <img 
            className='add' 
            onClick={() => addToCart(id) }// ✅ Correct update
            src={assets.add_icon_white} 
            alt="Add Item" 
          />
        ) : (
          <div className='food-item-counter'>
            <img 
              onClick={() => removeFromCart(id)}// ✅ Correct update with lower bound
              src={assets.remove_icon_red} 
              alt="Remove Item" 
            />
            <p>{cartItems[id ]}</p>
            <img 
              onClick={() =>addToCart(id)} // ✅ Correct update
              src={assets.add_icon_green} 
              alt="Add Item" 
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

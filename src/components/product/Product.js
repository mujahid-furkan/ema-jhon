import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const product = (props) => {
  const { title, image, category, price, description,rating } = props.product;
  
  return (
    <div className="single-product">
      <div className="img-section">
        <img src={image} alt="" className="product-img" />
      </div>

      <div className="decs-section">
        <h4 className="product-name">{title}</h4>
        <p className='category'>Category : {category}</p>
        <p className='description'>Description : {description}</p>
       <div className='price-rate'>
        <h5 className='price'>Price :${price}</h5>
        <p className='rating'>Rating : {rating.rate}</p>
       </div>
        <button className='buyBtn' 
        onClick={()=>props.addProduct(props.product)} >
          <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
      </div>

    </div>
  );
};

export default product;

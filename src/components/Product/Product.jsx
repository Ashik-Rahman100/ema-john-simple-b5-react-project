import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product,handleAddToCart}) => {
    // const {product,handleAddToCart} = props;
    const{name,img,price,seller,ratings} = product;
    
    return (
        <div className='product' >
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name' >{name}</p>
                <p style={{fontSize:'25px',marginTop:'5px', marginBottom:'15px'}} >Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>{ratings} stars</small></p>
            </div>
            <button className='btn-cart' 
            onClick={() => handleAddToCart(product)} >
                <p className='btn-text' >Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
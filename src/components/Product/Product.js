import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { product, handelAddToCart } = props
    const { name, img, seller, price, rating } = product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'> {name}</p>
                <h3>price:${price}</h3>
                <p>seller:{seller}</p>
                <p>rating:{rating}stars</p>
            </div>
            <button onClick={() => handelAddToCart(props.product)} className='btn-cart'>
                <p>add to Cart</p>
                <FontAwesomeIcon
                    icon={faShoppingCart}
                ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
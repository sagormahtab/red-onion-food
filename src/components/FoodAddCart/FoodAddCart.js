import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const FoodAddCart = (props) => {
    const {name, description, price} = props.food;
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>${price}</h2>
            <button onClick={()=>props.handleAddProduct(props.food)}><FontAwesomeIcon icon={faShoppingCart} />  Add</button>
            <br/>
        </div>
    );
};

export default FoodAddCart;
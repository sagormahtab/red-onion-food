import React, { useState, useEffect } from 'react';
import './FoodDetail.css'
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import FoodAddCart from '../FoodAddCart/FoodAddCart';

const FoodDetail = () => {
    const {foodKey} = useParams();
    const food = fakeData.find(pd => pd.key === foodKey);
    const {image} = food;

    //Generating next item
    let nextData = fakeData.filter(fd => fd.category === food.category);
    for( let i = 0; i < nextData.length; i++){
         if ( nextData[i] === food) {
              nextData.splice(i, 1);
              i--; 
        }
    }
    let j = Math.floor(Math.random() * nextData.length);
    let k = Math.floor(Math.random() * nextData.length);
    while(k === j){
        k = Math.floor(Math.random() * nextData.length);
    }
    

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey  => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    },[])
    const handleAddProduct = (product)=>{
        let count = 1;
        let newCart;
        product.quantity = 1;
        newCart = [...cart, product];
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    console.log(j);

    return (
        <div className="food-detail container">
            <div className="row align-items-center">
                <div className="col-md-6 text-left">
                    <FoodAddCart food={food}
                    handleAddProduct = {handleAddProduct}
                    ></FoodAddCart>
                    {/* Recursive Call */}
                    <Link to={"/food/"+nextData[j].key}><img className="img-fluid nxt-img" src={nextData[j].image} alt=""/></Link>
                    <Link to={"/food/"+nextData[k].key}><img className="img-fluid nxt-img" src={nextData[k].image} alt=""/></Link>
                    <Link to="/" style={{textDecoration: 'none', color: 'gray', fontSize: '40px',   position: 'relative', top: '26px', left: '15px'}}><FontAwesomeIcon icon={faAngleRight} /></Link>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
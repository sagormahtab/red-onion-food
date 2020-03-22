import React from 'react';
import './FoodDetail.css'
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const FoodDetail = () => {
    const {foodKey} = useParams();
    const food = fakeData.find(pd => pd.key === foodKey);
    const {image, name, description, price} = food;

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
    console.log(j);

    return (
        <div className="food-detail container">
            <div className="row align-items-center">
                <div className="col-md-6 text-left">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h2>${price}</h2>
                    <button onClick=""><FontAwesomeIcon icon={faShoppingCart} />  Add</button>
                    <br/>

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
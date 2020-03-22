import React from 'react';
import './Breakfast.css';
import { Link } from 'react-router-dom';

const Breakfast = (props) => {
    console.log(props.food.image);
    const {image, name, description, price, key} = props.food;
    return (
        <div className="col-md-4">
            <Link to={"/food/"+key} style={{textDecoration: 'none', color: 'black'}}>
                <div className="card" style={{width: "18rem"}}>
                    <img src={image} className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <h3>${price}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Breakfast;
import React from 'react';
import './Breakfast.css';

const Breakfast = (props) => {
    console.log(props.food.image);
    const {image, name, description, price} = props.food;
    return (
        <div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Breakfast;
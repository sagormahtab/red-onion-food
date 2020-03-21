import React from 'react';
import './Foods.css';
import fakeData from '../../fakeData'
import Breakfast from '../Breakfast/Breakfast';

const Foods = (props) => {
    const foods = fakeData;
    let currentFoods = foods.filter(fd => fd.category === props.food);
    console.log(props);
    return (
        <div className="food-container container">
            <nav className="nav justify-content-center">
                <span className="nav-link" onClick={() => props.handleFood("breakfast")}>Breakfast</span>
                <span className="nav-link" onClick={() => props.handleFood("lunch")}>Lunch</span>
                <span className="nav-link" onClick={() => props.handleFood("dinner")}>Dinner</span>
            </nav>
            
            <div className="breakfast row">
                {
                currentFoods.map(fd => <Breakfast
                food = {fd}>
                </Breakfast>)
                }
            </div>
        </div>
    );
};

export default Foods;
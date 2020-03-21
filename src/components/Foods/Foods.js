import React from 'react';
import './Foods.css';
import fakeData from '../../fakeData'
import Breakfast from '../Breakfast/Breakfast';

const Foods = (props) => {
    const foods = fakeData;
    let currentFoods = foods.filter(fd => fd.category === props.food);
    const borderStyle = {background: "linear-gradient(#F91C47,#F91C47) bottom no-repeat", backgroundSize: "50% 3px"};
    const noBorder = {background: "none"};
    console.log(props);
    return (
        <div className="food-container container">
            <nav className="nav justify-content-center">
                <span className="nav-link" style={props.border && props.food==="breakfast" ? borderStyle: noBorder} onClick={() => props.handleFood("breakfast")}>Breakfast</span>
                <span className="nav-link" style={props.border && props.food==="lunch" ? borderStyle: noBorder} onClick={() => props.handleFood("lunch")}>Lunch</span>
                <span className="nav-link" style={props.border && props.food==="dinner" ? borderStyle: noBorder} onClick={() => props.handleFood("dinner")}>Dinner</span>
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
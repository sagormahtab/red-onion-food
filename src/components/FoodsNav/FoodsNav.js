import React, { useState } from 'react';
import './FoodsNav.css'
import Foods from '../Foods/Foods';

const FoodsNav = () => {
    const [food, setFood] = useState("lunch");
    const handleFood = (food) => {
        setFood(food);
    }
    return (
        <div>
            <Foods food={food}
            handleFood = {handleFood}
            ></Foods>
        </div>
    );
};

export default FoodsNav;
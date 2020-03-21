import React, { useState } from 'react';
import './FoodsNav.css'
import Foods from '../Foods/Foods';

const FoodsNav = () => {
    const [food, setFood] = useState("lunch");
    const [border, setBorder] = useState(true);
    const handleFood = (food) => {
        setFood(food);
        setBorder(true);
    }
    return (
        <div>
            <Foods food={food}
            border={border}
            handleFood = {handleFood}
            ></Foods>
        </div>
    );
};

export default FoodsNav;
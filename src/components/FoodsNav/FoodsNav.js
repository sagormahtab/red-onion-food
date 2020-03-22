import React, { useState } from 'react';
import './FoodsNav.css'
import Foods from '../Foods/Foods';

const FoodsNav = () => {
    const [category, setCategory] = useState("lunch");
    const [border, setBorder] = useState(true);

    const handleFoodCategory = (ctgr) => {
        setCategory(ctgr);
        setBorder(true);
    }
    
    return (
        <div className="total-food-container">
            <Foods category={category}
            border={border}
            handleFoodCategory = {handleFoodCategory}
            ></Foods>

            <button>Checkout Your Food</button>
        </div>
    );
};

export default FoodsNav;
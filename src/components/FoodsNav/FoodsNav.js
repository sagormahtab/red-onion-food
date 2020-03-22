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
            disabled={true}
            handleFoodCategory = {handleFoodCategory}
            ></Foods>
        </div>
    );
};

export default FoodsNav;
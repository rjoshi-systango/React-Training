import React, { useContext } from "react";
import MealItem from "./MealItem";
import MealListContext from "../../context/meal-list-context/meal-list-context";


import './MealList.css';


const MealList = () => {

    const {availableMealList, cartItemList} = useContext(MealListContext);
    
    const addItemToCart = (item) => {
        
        cartItemList[item.id].quantity += item.quantity;
        // console.log(item);
        // console.log(cartItemList[item.id].quantity);
    }
    return (
        
            <div className="meal-list">
                {availableMealList.map((item) => {
                    return <MealItem item={item} key={item.id} onAddingItem={addItemToCart}/>    
                })}
            </div>
        
        
        
    );
}

export default MealList;
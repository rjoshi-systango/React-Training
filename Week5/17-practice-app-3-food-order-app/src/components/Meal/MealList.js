import React, { useCallback, useContext, useEffect, useState } from "react";
import MealItem from "./MealItem";
import MealListContext from "../../context/meal-list-context/meal-list-context";


import './MealList.css';


const   MealList = () => {
    
    const [temp, setTemp] = useState([]);

    const getMealList = useCallback(async() => {
        const response = await fetch("https://react-project-sending-http-default-rtdb.firebaseio.com/meals.json");
    
        // console.log(response);
        
        const data = await response.json();

        setTemp(data);

    }, []);

    useEffect( () => {
        // console.log("useEffect");
        getMealList();
    }, [getMealList])
    
    const {cartItemList} = useContext(MealListContext);

    const addItemToCart = (item) => {
        cartItemList[item.id].quantity += item.quantity;
        // console.log(cartItemList[item.id]);
    }
    return (
        
            <div className="meal-list">
                {temp.map((item) => {
                    return <MealItem item={item} key={item.id} onAddingItem={addItemToCart}/>    
                })}
            </div>
        
        
        
    );
}

export default MealList;
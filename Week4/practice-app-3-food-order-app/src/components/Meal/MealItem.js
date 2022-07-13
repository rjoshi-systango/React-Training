import React, { useContext, useState } from "react";
import MealListContext from "../../context/meal-list-context/meal-list-context";
import './MealItem.css';

const MealItem = (props) => {

    const [mealQuantity, setMealQuantity] = useState(1);

    const {counter, setCounter} = useContext(MealListContext);

    const quantityChangeHandler = (event) => {
        if(event.target.value > 0 && event.target.value < 6)
        {
            setMealQuantity(event.target.value);
        }
        
    } 

    const addClickHandler = () => {
        let mealItemDetail = {
            id: props.item.id,
            title: props.item.title, 
            message: props.item.message, 
            amount: props.item.amount,
            quantity: parseInt(mealQuantity)
        }
    //    setCounter(counter+1)
        props.onAddingItem(mealItemDetail);
        setCounter((prevState) => {
            return prevState + parseInt(mealQuantity)
        })
    }
    


    return (
        <>
            <div className="item-container">
                <div className="meal-list-item-left-area">
                    <div className="meal-list-item-left-area-content">{props.item.title}</div>
                    <div className="meal-list-item-left-area-content message">{props.item.message}</div>
                    <div className="meal-list-item-left-area-content">$<b>{props.item.amount}</b></div>
                </div>

                <div className="meal-list-item-right-area">
                    <div className="quantity-area">
                        <label>Quantity</label>
                        <input type="number"  min="1" max="5" value={mealQuantity} onChange={quantityChangeHandler}/>
                    </div>
                    <div>
                        <button className="quantity-add-btn" onClick={addClickHandler} >+Add</button>
                    </div>
                </div>
            </div>
        </>

        
    );
}

export default MealItem;
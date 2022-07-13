import React, { useContext } from "react";
import MealListContext from "../../context/meal-list-context/meal-list-context";
import './CartItem.css';

const CartItem = (props) => {

    const {cartItemList} = useContext(MealListContext);

    const subtractClickHandler = () => {
        cartItemList[props.mealInformation.id].quantity -= 1;
        props.onChangeMealQuantity(cartItemList[props.mealInformation.id].quantity);
    }

    const addClickHandler = () => {
        cartItemList[props.mealInformation.id].quantity += 1;
        props.onChangeMealQuantity(cartItemList[props.mealInformation.id].quantity);

    }

    return (
        <>
            {/* <div className="backddrop"></div> */}
            <div className="cart-item-container">
            <div className="meal-list-item-left-area">
                <div className="meal-list-item-left-area-content"> {props.mealInformation.title} </div>
                
                <div className="meal-list-item-left-area-content"> ${props.mealInformation.amount} </div>
            </div>

            <div className="meal-list-item-middle-area">
                <div>x{props.mealInformation.quantity}</div>
            </div>

            <div className="meal-list-item-right-area">
                <div >
                    <button onClick={subtractClickHandler} className="meal-list-item-right-area-content">-</button>
                </div>
             
                <div >
                    <button onClick={addClickHandler} className="meal-list-item-right-area-content">+</button>
                </div>
            </div>
        </div>
        <hr></hr>
        </>
        
    );
}

export default CartItem;
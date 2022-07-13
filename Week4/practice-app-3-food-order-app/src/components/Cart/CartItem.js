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
        <div className="cart-item-container">
            <div className="meal-list-item-left-area">
                <div>{props.mealInformation.title}</div>
                <div>{props.mealInformation.quantity}</div>
                <div>${props.mealInformation.amount}</div>
            </div>

            <div className="meal-list-item-right-area">
                <div>
                    <button onClick={subtractClickHandler} >-</button>
                </div>
             
                <div>
                    <button onClick={addClickHandler} >+</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
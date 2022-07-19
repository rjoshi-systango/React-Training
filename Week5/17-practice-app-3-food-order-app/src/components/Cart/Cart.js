import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
// import CartMealListContext from "../Context/CartItemList/CartItemList";
import MealListContext from "../../context/meal-list-context/meal-list-context";


import "./Cart.css";
import Checkout from "../Checkout/Checkout";

const Cart = () => {

    
    const { counter, cartItemList } = useContext(MealListContext);
    const [isOrder, setIsOrder] = useState(false);
    
    
    console.log("cart");
    let cartButtonClasses = isOrder ? "cart-button hide" : "cart-button";

    let totalAmount = 0;

    cartItemList.map((item) => {
        return totalAmount += item.quantity * item.amount;
    })

    const orderClickHandler = () => {
        // isOrder = true;
        if(counter > 0) {
            setIsOrder(true);
        }
        // console.log(isOrder);
    }



    return (
        <>
        <div className="backdrop"></div>
            <div className="cart-area">
                {cartItemList.map((item) => {
                    if (item.quantity > 0) {
                        return <CartItem mealInformation={item} key={item.id}  />
                    }
                    return null;
                })}
                <div className="total-amount">
                    <p className="total-amount-content">Total Amount</p>
                    <p className="total-amount-content" >${totalAmount.toFixed(2)}</p>
                </div>
                <div className="cart-buttons">
                    <button className={cartButtonClasses} >Close</button>
                    <button className={cartButtonClasses} onClick={orderClickHandler}>Order</button>
                </div>
                {isOrder && <Checkout />}
            </div>
        </>

    );
}

export default Cart;
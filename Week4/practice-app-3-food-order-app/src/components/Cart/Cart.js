import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
// import CartMealListContext from "../Context/CartItemList/CartItemList";
import MealListContext from "../../context/meal-list-context/meal-list-context";


import "./Cart.css";

const Cart = () => {

    const { cartItemList } = useContext(MealListContext);

    let totalAmount = 0;

    cartItemList.map((item) => {
        return totalAmount += item.quantity * item.amount;
    })

    const [mealQuantity, changeMealQuantity] = useState();
    // let {cartItemList} = useContext(CartMealListContext);
    console.log(cartItemList);

    return (
        <>
        <div className="backdrop"></div>
            <div className="cart-area">
                {cartItemList.map((item) => {
                    if (item.quantity > 0) {
                        return <CartItem mealInformation={item} key={item.id} onChangeMealQuantity={changeMealQuantity} />
                    }

                })}
                <div>
                    <p>Total Amount</p>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
            </div>
        </>

    );
}

export default Cart;
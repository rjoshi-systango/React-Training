import React, { useContext, useState } from "react";
import MealListContext from "../../context/meal-list-context/meal-list-context";
import Cart from "../Cart/Cart";
import "./Navbar.css";

const Navbar = () => {

    // const cartItemList = useContext(CartMealList)?.cartItemList;

    const [cartClickFlag, setCartClickFlag ] = useState(null);

    const {counter} = useContext(MealListContext);
    // console.log(counter);

    const buttonClickHandler = () => {

        setCartClickFlag(true);

    }

    return(
        <div>
            {cartClickFlag && <Cart />}
            <div className="header">
                <div className="react-meals">ReactMeals</div>
                <div className="" >
                    <button onClick={buttonClickHandler}>
                        <span>Your Cart</span>
                        <span> {counter} </span>
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default Navbar;
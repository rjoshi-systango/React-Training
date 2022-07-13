import React, { useContext, useState } from "react";
import MealList from "../Meal/MealList";
import MessageBox from "../MessageBox/MessageBox";
import Navbar from "../Navbar/Navbar";
import MealListContext from "../../context/meal-list-context/meal-list-context";


import "./Main.css";



const Main = () => {


    const {availableMealList, cartItemList} = useContext(MealListContext)
    const [counter, setCounter] = useState(0);

    return (
        // <CartMealList.Provider value={{cartItemList: [], counter ,setCounter}}>
        <MealListContext.Provider value={{counter, setCounter, availableMealList, cartItemList}}>
            <React.Fragment>
                <div className="background-image"></div>
                <div className="main">
                    <Navbar />
                    <MessageBox />
                    <MealList />
                </div>
            </React.Fragment>
        </MealListContext.Provider>
        // </CartMealList.Provider>
    );
}

export default Main;
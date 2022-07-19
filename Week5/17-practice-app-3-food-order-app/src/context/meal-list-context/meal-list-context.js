import React from "react";

const MealListContext = React.createContext({
    cartItemList : [
        {id: 0, title: "Green Bowl", message: "Healthy...and green...", amount: 18.99, quantity: 0},    
        {id: 1, title: "Sushi", message: "Finest fish and veggies", amount: 22.99, quantity: 0},
        {id: 2, title: "Schnitzel", message: "A german specialty!", amount: 16.50, quantity: 0},
        {id: 3, title: "Barbecue Burger", message: "American, raw, meaty", amount: 12.99, quantity: 0},
    ], 
    counter: 0
     
});

export default MealListContext;
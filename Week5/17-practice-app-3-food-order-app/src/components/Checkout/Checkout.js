import React, { useContext, useRef } from 'react';
import MealListContext from '../../context/meal-list-context/meal-list-context';
import './Checkout.css';

const isEmpyt = (item) => item.trim() === 0;
const isCorrectSize = (item) => item.length > 0 && item.length < 6;

const Checkout = () => {

    const enteredName = useRef();
    const streetInputValue = useRef();
    const postalCodeInputValue = useRef();
    const cityInputValue = useRef();
    let user = {};




    console.log("form");

    const { cartItemList } = useContext(MealListContext)
    console.log(cartItemList);

    let orderDetail = cartItemList.map((item) => {
        if (item.quantity > 0) {
            return item;
        }
        return null;

    })


    const addOrder = async () => {
        const response = await fetch("https://react-project-sending-http-default-rtdb.firebaseio.com/order.json/", {
            method: 'POST',
            body: JSON.stringify({
                user: user,
                orderDetail: orderDetail
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            console.log("error");
        }

        let data = await response.json();

        console.log(data);

    }

    const submitHandler = (event) => {
        event.preventDefault();

        console.log("submit");

        const isEnteredNameValid = !isEmpyt(enteredName.current.value);
        const isEnteredStreetValid = !isEmpyt(streetInputValue.current.value);
        const isEnteredPostalCodeValid = !isEmpyt(postalCodeInputValue.current.value);
        const isEnteredCityValid = isCorrectSize(cityInputValue.current.value);

        
        const formIsValid = isEnteredNameValid && isEnteredStreetValid && isEnteredPostalCodeValid && isEnteredCityValid;
        
        console.log(formIsValid);
        if (!formIsValid) {
            return;
        }
        
        user = {
            name: enteredName.current.value,
            street: streetInputValue.current.value,
            postal_code: postalCodeInputValue.current.value,
            city: cityInputValue.current.value
        }
        console.log(user);
        addOrder();
        // console.log(enteredName.current.value);

    }




    return (
        <form className={'form'} onSubmit={submitHandler}>
            <div className={'control'}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={enteredName} />
            </div>
            <div className={'control'}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputValue} />
            </div>
            <div className={'control'}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputValue} />
            </div>
            <div className={'control'}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputValue} />
            </div>
            <div className={'actions'}>
                <button type='button' >
                    Cancel
                </button>
                <button className={'submit'} >Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;
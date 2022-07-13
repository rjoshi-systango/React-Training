import React, { useState } from "react";
// import invalidPopUp from '../PopUp/InvalidPopUp';
import './UserForm.css';

const UserForm = (props) => {

    const [enteredInputValue, setEnteredInputValue] = useState();
    const [enteredAgeValue, setEnteredAgeValue] = useState();

    const inputChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredInputValue(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAgeValue(event.target.value);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        const userData = {
            id: Math.random(),
            name: enteredInputValue,
            age: enteredAgeValue,
        }
        console.log(userData);
        

        if((userData.name === undefined) && (userData.age === undefined)) {
            console.log("Invalid");
            <invalidPopUp message='Enter Valid Input'/>
            return;
        }

        if (userData.age < 0) {
            <invalidPopUp message='Please enter valid age (>0)'/>
            return;
        }

        props.onSaveUserInformation(userData);
   
    }

    return (
        <form onSubmit={submitFormHandler} className='form' > 
            <div className ='form-content' >
                <label>Username</label>
                <input type="text" onChange={inputChangeHandler} />
            </div>
            <div>
                <label>Age</label>
                <input type='number' onChange={ageChangeHandler}  />
            </div>
            <div>
                <button type="submit" className='form-button' >Add User</button>
            </div>
        </form>
        
    );
}

export default UserForm;


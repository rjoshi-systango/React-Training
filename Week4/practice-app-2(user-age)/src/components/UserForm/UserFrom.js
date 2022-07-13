import React, { useState } from "react";
import ErrorPopUp from "../ErrorMessage/ErrorPopUp";
import Wrapper from "../Helper/Wrapper";
import Card from '../UI/Card';
import './UserForm.css';

const UserForm = (props) => {

    const [enteredUsernameInput, setEneteredUsernameInput] = useState('');
    const [enteredAgeInput, setEneteredAgeInput] = useState('');

    let [errorMessage, setErrorMessage] = useState(null);
    
    const changeUsernameHandler = (event) => {
        setEneteredUsernameInput(event.target.value);
    }

    const changeAgeValueHandler = (event) => {
        setEneteredAgeInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let newUserInput = {
            id: Math.random() * 2000,
            name: enteredUsernameInput,
            age: enteredAgeInput
        }

        if (enteredUsernameInput.trim().length === 0 && enteredAgeInput.trim().length === 0) {
            console.log("Null Value");
            setErrorMessage({
                title: "Invalid input",
                message: "Please enter a valid name & age (non-empty values)."
            });
            setEneteredUsernameInput('');
            setEneteredAgeInput('');
            return;
        }

        if(enteredAgeInput.trim() < 0 ) {
            console.log("Invalid Age");
            setErrorMessage({
                title: "Invalid input",
                message: "Please enter a valid age (>0)."
            });
            setEneteredUsernameInput('');
            setEneteredAgeInput('');
            return;
        }


        props.onSubmitNewUser(newUserInput);
        setEneteredUsernameInput('');
        setEneteredAgeInput('');
    }

    return (

        <Wrapper>
            {errorMessage && <ErrorPopUp message={errorMessage} setErrorMessage={setErrorMessage}/>}
            <Card>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username"  >Username</label>
                    <input id="username" type="text" value={enteredUsernameInput} onChange={changeUsernameHandler} />
                    <label htmlFor="age"  >Age (Years)</label>
                    <input id="age" type="text" value={enteredAgeInput} onChange={changeAgeValueHandler} />
                    <button type="submit" >Add User</button>
                </form>
            </Card>
        </Wrapper>
        
    );
}

export default UserForm;
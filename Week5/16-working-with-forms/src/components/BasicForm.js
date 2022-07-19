import React from "react";
import useInput from '../hooks/basic-form-use-input';


const BasicForm = () => {

  const {
    value: enteredFName,
    isValid: isFNameValid,
    hasError: fNameHasError,
    changeInputHandler: fNameChangeInputHandler,
    inputBlurHandler: fNameBlurHandler,
    resetInput: fNameInputReset,
  } = useInput(value => value.trim() !== '')


  const {
    value: enteredLName,
    isValid: isLNameValid,
    hasError: lNameHasError,
    changeInputHandler: lNameChangeInputHandler,
    inputBlurHandler: lNameBlurHandler,
    resetInput: lNameInputReset,
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: emailHasError,
    changeInputHandler: emailChangeInputHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: emailInputReset,


  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  const isFNAMEInputFieldHasError = fNameHasError ? "form-control invalid" : "form-control"
  const isLNAMEInputFieldHasError = lNameHasError ? "form-control invalid" : "form-control"
  const isEmailInputFieldHasError = emailHasError ? "form-control invalid" : "form-control"

  if(isEmailValid && isFNameValid && isLNameValid) {
    formIsValid = true;
  }



  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredFName);
    console.log(enteredLName);
    console.log(enteredEmail);

    fNameInputReset();
    lNameInputReset();
    emailInputReset();


  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={isFNAMEInputFieldHasError}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredFName} 
            onBlur={fNameBlurHandler}  
            onChange={fNameChangeInputHandler}  
          />
          {fNameHasError && <p className='error-text' >first name not be empty</p>}
        </div>
        <div className={isLNAMEInputFieldHasError}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredLName} 
            onBlur={lNameBlurHandler}  
            onChange={lNameChangeInputHandler}  
          />
         {lNameHasError && <p className='error-text' >last name not be empty</p>}

        </div>
      </div>
      <div className={isEmailInputFieldHasError}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name'
          value={enteredEmail} 
          onBlur={emailBlurHandler}  
          onChange={emailChangeInputHandler}   
        />
        {emailHasError && <p className='error-text' >not valid email.</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

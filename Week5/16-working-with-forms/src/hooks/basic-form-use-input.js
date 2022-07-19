import { useState } from 'react';

const useInput = (validation) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
  
    const isValid = validation(enteredValue);
    const hasError = !isValid && isTouched;
  
  
    const changeInputHandler = (event) => {
      setEnteredValue(event.target.value);
  
    }
  
    const inputBlurHandler = () => {
      setIsTouched(true);
    }
    
    const resetInput = () => {
        setEnteredValue('');
        setIsTouched(false);

    }

    return {
        value: enteredValue,
        isValid,
        hasError,
        changeInputHandler,
        inputBlurHandler,
        resetInput,
    }

}

export default useInput;
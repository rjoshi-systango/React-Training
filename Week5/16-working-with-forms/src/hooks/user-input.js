import { useState, useReducer } from 'react';


const initialState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if(action.type === "INPUT") {
        return {value: action.value, isTouched: state.isTouched}
    }
    if(action.type === "BLUR") {
        return {isTouched: true, value: state.value}

    }
    if(action.type === "RESET") {
        return initialState;
    }
    return initialState;
}

const useInput = (validation) => {
    
    const [inputState, dispatch] = useReducer(inputStateReducer, initialState);
    
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validation(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;


    const valueInputChangeHandler = (event) => {
        dispatch({type: "INPUT", value: event.target.value})
        // setEnteredValue(event.target.value);
    };
    
    const valueInputBlurHandler = (event) => {
        dispatch({type: 'BLUR'})
        // setIsTouched(true);
    };
    
    const reset = () => {
        dispatch({type: "RESET"})
        // setEnteredValue('');
        setIsTouched(false);
    }


    return {    
        value: enteredValue, 
        isTouched: isTouched, 
        isValid: valueIsValid, 
        hasError: hasError,
        valueInputChangeHandler,
        valueInputBlurHandler,
        reset: reset,
    }

}

export default useInput;
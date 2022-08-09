import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodos: React.FC<{onAddText: (text: string) => void}> = (props) => {
    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInput.current!.value;
        if(enteredText.trim().length === 0) {
            //thorw error
            return;
        }

        props.onAddText(enteredText);
        
            
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInput} /> 
            <button>Add</button>
        </form>
    )
}

export default NewTodos;
import React from "react";
import './ErrorPopUp.css';

const ErrorPopUp = (props) => {
    console.log(props.message);

    const clickHandler = (event) => {
        props.setErrorMessage(null);
    }

    return (

        <React.Fragment>
            <div className="backdrop"/>
            <div className="popup">
                <header>
                    <h3 className="">{props.message.title}</h3>
                </header>
                <main>
                    <p>{props.message.message}</p>
                </main>
                <footer>
                    <button onClick={clickHandler}>Okay</button>
                </footer>
            </div>
        </React.Fragment>
    );
}

export default ErrorPopUp;
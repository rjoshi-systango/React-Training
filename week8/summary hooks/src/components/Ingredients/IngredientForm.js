import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from '../UI/LoadingIndicator';

const IngredientForm = React.memo(props => {
  const [enteredInput, setEnteredInput] = useState({
    title: '',
    amount: ''
  })

  const submitHandler = event => {
    event.preventDefault();
    
    props.onAddIngredient(enteredInput);

    setEnteredInput({title: '', amount: ''});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={enteredInput.title} onChange={(event) => {setEnteredInput((prevState) => {
              return {title: event.target.value, amount: prevState.amount }
            })}}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={enteredInput.amount} onChange={(event) => {setEnteredInput((prevState) => {
              return {title: prevState.title, amount: event.target.value }
            })}}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
          {props.loading && <LoadingIndicator />}
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;

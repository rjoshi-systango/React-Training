import React, {  useCallback, useReducer } from 'react';
import IngredientList from "./IngredientList";
import IngredientForm from './IngredientForm';
import Search from './Search';
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (state, action) => {
  if(action.type === "SEND") {
    return {
       ingredient: state.ingredient ,isLoading: true, error: state.error
    }
  }

  if(action.type === "RESPONSE") {
    return {
      ingredient: state.ingredient ,isLoading: false, error: state.error
   }
  }

  if(action.type === "ADD") {
    return {
      ingredient: [...state.ingredient, action.ingredient] ,isLoading: false, error: state.error
   }
  }

  if(action.type === "DELETE") {
    return {
      ingredient: state.ingredient.filter((ingredient) => ingredient.id !== action.id)  ,isLoading: false, error: state.error
   }
  }

  if(action.type === "ERROR") {
    return {
      ingredient: state.ingredient ,isLoading: false, error: !state.error
   }
  }
  

  if(action.type === "FILTERINGREDIENT") {
    return {
      ingredient: action.ingredient ,isLoading: false, error: state.error
   }
  }

}

function Ingredients() {

  const [ingredients, dispatch] = useReducer(ingredientReducer , {
    ingredient: [], isLoading: null , error: false
  });
  const {ingredient, isLoading, error} = ingredients;

  const addIngredientHandler = (ingredient) => {
    dispatch({type: "SEND"});
    fetch('https://react-project-sending-http-default-rtdb.firebaseio.com/ingredient.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then((response) => {
      dispatch({type: "RESPONSE"});
      return response.json();

    })
    .then((data) => {
      dispatch({type: "ADD", ingredient: {id: data.name, ...ingredient }} )

    })
    .catch(error => {
      dispatch({type:"ERROR"});
    })
  }

  const filterHandler = useCallback((filterIngredient) => {
    dispatch({type: "FILTERINGREDIENT", ingredient: filterIngredient});
  },[])


  const removeIngredient = (ingredientId) => {
    dispatch({type: "SEND"});
    fetch(`https://react-project-sending-http-default-rtdb.firebaseio.com/ingredient/${ingredientId}.json`, {
      method: 'DELETE',
    })
    .then((response) => {
      dispatch({type: "RESPONSE"});
      dispatch({type: "DELETE", id: ingredientId});
    })
  }

  const closeErrorHandler = () => {
    dispatch({type: "ERROR"})
  }

  return (
    <div className="App">

      {error && <ErrorModal onClose={closeErrorHandler}>{error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadingIngredient={filterHandler}/>
        {/* Need to add list here! */}
        <IngredientList ingredients={ingredient} onRemoveItem={removeIngredient}/> 
      </section>
   
      

    </div>
  );
}

export default Ingredients;

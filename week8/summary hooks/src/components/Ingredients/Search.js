import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const { onLoadingIngredient } = props;
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect(() => {
    const query = 
            enteredFilter.length === 0 
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch('https://react-project-sending-http-default-rtdb.firebaseio.com/ingredient.json' + query)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      const loadingIngredients = [];
      for( let key in responseData){
        loadingIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        })
      }
      onLoadingIngredient(loadingIngredients);
    }) 
  }, [enteredFilter ,onLoadingIngredient])

  const changeFilterHandler = (event) => {
    setEnteredFilter(event.target.value);
  }

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={changeFilterHandler}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;

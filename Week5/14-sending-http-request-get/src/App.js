import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';


function App() {
  console.log("app running");
  
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(false);

  const fetchMovieClickHadler = useCallback(async () => {
    setIsLoading(true);
    
    // console.log(movies.length);
    
    try {
      let response = await fetch("https://swapi.dev/api/films/");
      
      if(response.ok === false) {
        throw Error("Something went wrong");
      }
      
      let data = await response.json();

      let trasformedMovies = data.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          releaseDate: item.release_date,
          openingText: item.opening_crawl
        }
      })
      
      setMovies(trasformedMovies);
    }
    
    catch(error) {
      console.log(error);
      setErrorMessage(error);
    }
    
    setIsLoading(false);
    setErrorMessage(false);  
  }, [])
  
  useEffect(() => {
    fetchMovieClickHadler();
  }, [fetchMovieClickHadler])
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieClickHadler}>Fetch Movies</button>
      </section>
      
      <section>
      {isLoading && <p>Loading...</p> }
      {!isLoading && movies.length === 0 && <p>No Record Found...</p>}
      {!isLoading && movies.length > 0 && <MoviesList movies={movies} /> }
      {!isLoading && errorMessage && <p>{errorMessage}</p>}
        
      </section>
    </React.Fragment>
  );
}

export default App;

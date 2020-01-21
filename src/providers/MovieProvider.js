import React, { useState, useEffect } from "react";

export const MovieContext = React.createContext({
  movies: [],
  loadingMovies: false
});

export default function MovieProvider({ children }) {
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoadingMovies(true);

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
        setLoadingMovies(false);
      });
  }, []);

  return (
    <MovieContext.Provider
      value={{
        loadingMovies,
        movies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

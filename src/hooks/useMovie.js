import { useState, useEffect } from "react";

export const useMovie = movieId => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    )
      .then(res => res.json())
      .then(movie => {
        setMovie(movie);
      });
  }, [movieId]);

  return {
    movie
  };
};

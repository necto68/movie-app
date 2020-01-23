import React, { useContext } from "react";
import { MovieContext } from "../providers/MovieProvider";
import MovieList from "../containers/MovieList";
import MovieSpin from "../ui/MovieSpin";

export default function PopularRoute() {
  const { loadingMovies, movies } = useContext(MovieContext);

  if (loadingMovies) return <MovieSpin />;

  return <MovieList movies={movies} />;
}

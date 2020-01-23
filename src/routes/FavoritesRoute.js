import React, { useContext } from "react";
import { MovieContext } from "../providers/MovieProvider";
import { FavoritesContext } from "../providers/FavoritesProvider";
import MovieList from "../containers/MovieList";
import MovieSpin from "../ui/MovieSpin";

export default function FavoritesRoute() {
  const { loadingMovies, movies } = useContext(MovieContext);
  const { favorites } = useContext(FavoritesContext);
  const favoriteMovies = movies.filter(movie => favorites.has(movie.id));

  if (loadingMovies) return <MovieSpin />;

  return <MovieList movies={favoriteMovies} />;
}

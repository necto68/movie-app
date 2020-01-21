import React, { useContext } from "react";
import { MovieContext } from "../providers/MovieProvider";
import { FavoritesContext } from "../providers/FavoritesProvider";
import Movie from "../ui/Movie";
import MovieSpin from "../ui/MovieSpin";

export default function MovieList() {
  const { loadingMovies, movies } = useContext(MovieContext);
  const { favorites, addToFavorites, deleteFromFavorites } = useContext(
    FavoritesContext
  );

  if (loadingMovies) return <MovieSpin />;

  return movies.map(({ id, title, overview, poster_path, backdrop_path }) => {
    const isFavorite = favorites.has(id);

    return (
      <Movie
        key={id}
        id={id}
        title={title}
        overview={overview}
        posterPath={poster_path}
        backdropPath={backdrop_path}
        isFavorite={isFavorite}
        handleFavoriteIconClick={
          isFavorite ? deleteFromFavorites : addToFavorites
        }
      />
    );
  });
}

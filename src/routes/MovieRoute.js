import React from "react";
import { useParams } from "react-router-dom";
import Movie from "../ui/Movie";
import MovieSpin from "../ui/MovieSpin";
import { useMovie } from "../hooks/useMovie";

export default function FavoritesRoute() {
  const { movieId } = useParams();
  const { movie } = useMovie(movieId);
  const { id, title, overview, poster_path, backdrop_path, budget } =
    movie || {};

  if (!movie) return <MovieSpin />;

  return (
    <Movie
      id={id}
      title={title}
      overview={overview}
      posterPath={poster_path}
      backdropPath={backdrop_path}
      budget={budget}
    />
  );
}

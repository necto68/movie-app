import React from "react";
import Movie from "../ui/Movie";

export default function MovieList({ movies }) {
  return (
    <div className="content">
      {movies.map(({ id, title, overview, poster_path, backdrop_path }) => (
        <Movie
          key={id}
          id={id}
          title={title}
          overview={overview}
          posterPath={poster_path}
          backdropPath={backdrop_path}
        />
      ))}
    </div>
  );
}

import React from "react";
import { MovieCard } from "./MovieCard";

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}


interface ContentProps {
  movies:  Array<MovieProps>;
  titleGender: string;
}


export function Content(props:ContentProps) {
  // Complete aqui
  const { titleGender, movies } = props;
  return (
    <>
      <header>
        <span className="category">
          Categoria:<span> {titleGender}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
            key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </>
  );
}
import React from "react";

export default function MovieList(props) {
  const { movies, genres } = props;

  return (
    <div>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <a href="/details">
              <img
                alt="poster"
                width="50"
                src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
              />
              <div>{movie.title}</div>
              <div>{movie.vote_average * 10 + "%"}</div>
              <div>{movie.release_date}</div>
              <div>{movie.overview}</div>

              {genres
                .filter(genre => movie.genre_ids.includes(genre.id))
                .map(genre => (
                  <div key={genre.id}>{genre.name}</div>
                ))}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

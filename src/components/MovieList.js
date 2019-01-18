import React from "react";

export default function MovieList(props) {
  const { movies, genres } = props;

  return (
    <div>
      {movies.map(movie => (
        <div className="movieCard" key={movie.id}>
          <img
            className="moviePoster"
            alt="poster"
            src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
          />
          <div
            onClick={() => props.showMovieDetails(movie.id)}
            className="movieCardTitle"
          >
            {movie.title}
          </div>
          <div className="movieBlockRating">
            {movie.vote_average * 10 + "%"}
          </div>
          <div className="movieDate">{movie.release_date}</div>
          <div className="movieOverview">{movie.overview}</div>
          <div className="genresBox">
            {genres
              .filter(genre => movie.genre_ids.includes(genre.id))
              .slice(0, 3)
              .map(genre => (
                <div key={genre.id}>{genre.name}</div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const MOVIE_DB_URL = 'http://api.themoviedb.org/3';
const API_KEY = 'f72da0f6cdcb08642d419794f736cadb';

export async function getMovies (query, page = 1) {
    const result = await fetch(`${MOVIE_DB_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&page=${page}`)
    const json = await result.json();
    return json;
}

export async function getGenres () {
    const result = await fetch(`${MOVIE_DB_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
    const json = await result.json();
    return json.genres;
}

export async function getMovieDetails (movieId) {
    const result = await fetch(`${MOVIE_DB_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
    const json = await result.json();
    return json
}
const MOVIE_DB_URL = 'http://api.themoviedb.org/3';
const API_KEY = 'f72da0f6cdcb08642d419794f736cadb';

async function getMovies (query, page = 1) {
    const result = await fetch(`${MOVIE_DB_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&page=${page}`)
    const json = await result.json();
    return json.results;
}

export default {

    getMovies

}

import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import MovieList from './components/MovieList';
import { getMovies, getGenres, getMovieDetails } from  './movieDBClient';
import Paginator from './components/Paginator';
import SearchBar from './components/SearchBar';
import Header from './components/layout/Header'

import './App.css';
import Details from './Details';

const PAGE_SIZE = 5;

class App extends Component {
  state = {
    movies: [],
    detailedMovie: [],
    genres: [],
    currentPage: 1,
    movieCount: null,
    movieDetailsId: null
  }
  
  componentDidMount() {
    getGenres().then(genres => {
      this.setState({ genres });
    })
  }
 
  render() {
    return (
      <div className='App'>

        <Header />

        {!this.state.movieDetailsId ? (
          <React.Fragment>
            <SearchBar onSearch={this.searchHandler} />
        
            <MovieList
              movies={this.state.movies}
              genres={this.state.genres}
              showMovieDetails={this.showDetails}
            />

            <Paginator 
              currentPage={this.state.currentPage}
              movieCount={this.state.movieCount}
              pageSize={PAGE_SIZE}
              idx={this.changeCurrentPage}
            />
          </React.Fragment>
        ) : (
          <Details
            movie={this.state.detailedMovie} 
          />
        )}
      </div>
    );
  }

  showDetails = movieId => {
    this.detailedSearch(movieId)
    this.setState({
      movieDetailsId: movieId
    })
  }
  
  changeCurrentPage = nextPage => {
    this.setState({
      currentPage: nextPage
    })
  }

  detailedSearch = searchParameter => {
      getMovieDetails(searchParameter).then(movie => {
        this.setState({
          detailedMovie: movie
        });       
      });      
  }

  movieSearch = debounce((searchParameter) => {
    if (searchParameter) {
        getMovies(searchParameter).then(movies => {
          let firstValue = PAGE_SIZE * ( this.state.currentPage - 1 )
          let lastElement = PAGE_SIZE * this.state.currentPage
          this.setState({
            movies: movies.results.slice(firstValue,lastElement),
            movieCount: movies['total_results']
          });       
        });      
    }
    else {
      this.setState({ movies: [] });
    }
  }, 300);

  searchHandler = event => {
    this.movieSearch(event.target.value)
  }
}

export default App;

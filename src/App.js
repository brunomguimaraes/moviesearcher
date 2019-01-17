import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import MovieList from './components/MovieList';
import { getMovies, getGenres } from  './movieDBClient';
import Paginator from './components/Paginator';
import SearchBar from './components/SearchBar';
import Header from './components/layout/Header'

import './App.css';

const PAGE_SIZE = 5;

class App extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    movieCount: null
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

        <SearchBar onSearch={this.searchHandler} />
    
        <MovieList
          movies={this.state.movies}
          genres={this.state.genres}
        />

        <Paginator 
          currentPage={this.state.currentPage}
          movieCount={this.state.movieCount}
          pageSize={PAGE_SIZE}
          idx={this.changeCurrentPage}
        />
      </div>
    );
  }


  changeCurrentPage = nextPage => {
    this.setState({
      currentPage: nextPage
    })
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

import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movieDBClient from  './movieDBClient'
import debounce from 'lodash.debounce'

import Header from './components/layout/Header'

class App extends Component {
  state = {
    movies: [],
    genres: []
  }

  movieSearch = debounce((searchParameter) => {
    if (searchParameter) {
        movieDBClient.getMovies(searchParameter).then(movies => {
        this.setState({ movies });
        });      
    }
    else {
      this.setState({ movies: [] });
    }
  }, 300);

  searchHandler = event => {
    this.movieSearch(event.target.value)
  }
 
  render() {
    return (
      <div className='App'>

       <Header />

        <div>
          <p>
          <input className = 'searchBar' onChange={this.searchHandler.bind(this)} placeholder='Busque um filme por nome, ano ou gênero...'/>
          </p>
        </div>

      <MovieList movies={this.state.movies} />

      </div>
    );
  }
}

export default App;

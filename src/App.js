import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import { getMovies, getGenres } from  './movieDBClient'
import debounce from 'lodash.debounce'
import { Route, Switch} from 'react-router-dom'
import * as Details from './Details'

import Header from './components/layout/Header'

class App extends Component {
  state = {
    movies: [],
    genres: []
  }

  movieSearch = debounce((searchParameter) => {
    if (searchParameter) {
        getMovies(searchParameter).then(movies => {
        this.setState({ movies });
        getGenres().then(genres => {
          this.setState({ genres });
        })
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
      
      <div>
        <Switch>
          <Route path='/details' component={ Details } />
          <Route path='/App/movies' render= { () => <MovieList movies={this.state.movies} genres={this.state.genres} /> }/>
        </Switch>
      </div>

      

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies'
import movieDBClient from  './movieDBClient'
import debounce from 'lodash.debounce'

import Header from './components/layout/Header'
// import Searchbar from './components/Searchbar'

class App extends Component {
  state = {
    movies: []
  }

  movieSearch = debounce((searchParameter) => {
    if (searchParameter) {
        movieDBClient.getMovies(searchParameter).then(movies => {
        this.setState({ movies });
        this.setState({movieData: <Movies key={movies.id} movie={movies} />})
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
          <input className = 'searchBar' onChange={this.searchHandler} placeholder='Busque um filme por nome, ano ou gênero...'/>
          </p>
        </div>

        {this.state.movieData}

      </div>
    );
  }
}

export default App;

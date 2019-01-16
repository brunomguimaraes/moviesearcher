import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  movieSearch(searchParameter) {
    const urldb = 'http://api.themoviedb.org/3/search/movie?api_key=f72da0f6cdcb08642d419794f736cadb&language=pt-BR&query=' + searchParameter
    $.ajax({
      url: urldb,
      success: (searchResults) => {
        const results = searchResults.results
      
        let fetchedMovie = []

        results.forEach((movie) => {
          movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path
          movie.rating = movie.vote_average * 10 + '%'
          

          const urlGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=f72da0f6cdcb08642d419794f736cadb&language=pt-BR'
          $.ajax({
            url: urlGenre,
            success: (genreSearchResults) => {
          
            let arrGen = []
            movie.genre_ids.forEach( elementId => {

          //let genrestext = genreSearchResults.genres.filter(genre => genre.id === elementId).map(genre => genre.name)
          arrGen.push(genreSearchResults.genres.filter(genre => genre.id === elementId).map(genre => genre.name))
          
          //console.log(arrGen)
        })
        movie.genre = arrGen.flat()
        console.log(movie.genre)
      },
      error: (xhr, status, err) =>{
        console.error('Fail to fetch genre data.')
      }
    })
          const gridMovie = <Movies key={movie.id} movie={movie} />
          fetchedMovie.push(gridMovie)
        })

        this.setState({rows: fetchedMovie})

      },
      error: (xhr, status, err) =>
      console.error('Fail to fetch movie data.')

    })
  }

  searchHandler(changer) {
    const searchParameter = changer.target.value
    this.movieSearch(searchParameter)
  }

  render() {
    return (
      <div className='App'>

        <div className='headerBar'>
          <h1> Movies </h1>
        </div>

        <div>
          <p>
          <input className = 'searchBar' onChange={this.searchHandler.bind(this)} placeholder='Busque um filme por nome, ano ou gênero...'/>
          </p>
        </div>

        {this.state.rows}

      </div>
    );
  }
}

export default App;

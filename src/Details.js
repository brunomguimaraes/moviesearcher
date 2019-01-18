import React from 'react';

export default props => {

    return (
      <div>
        <div className='grid'>
          <div className='DetailsMovieTitle'><h1>{props.movie.title}</h1></div>
          <div className='DetailsMovieDate'><h5>{props.movie.release_date}</h5></div>
          <img 
              className='detailsMoviePoster'
              alt="poster"
              src={"https://image.tmdb.org/t/p/w185" + props.movie.poster_path}
                      />
          <div className='DetailsMovieOverview'><h2>Sinopse</h2><hr/><span>{props.movie.overview}</span></div>
          <div className='DetailsMovieInfo'>
          <h2>Informações<hr/></h2>
              <h3>Situação</h3><div>{props.movie.status}</div>     
              <h3>Idioma</h3><div>{props.movie.original_language}</div>
              <h3>Duração</h3><div>{props.movie.runtime}</div>
              <h3>Orçamento</h3><div>{`$` + props.movie.budget}</div>
              <h3>Receita</h3><div>{`$` + props.movie.revenue}</div>
              <h3>Lucro</h3><div>${props.movie.revenue - props.movie.budget}</div>
          </div>
          <div className='DetailedGenresContainer'>
              <div className='DetailedGenre'>{
                props.movie.genres ?
                (<div>{props.movie.genres.map(genre => genre.name)}</div>) :
                (props.movie.genres)}</div>
              </div>
          <div className='DetailsRating'><span>{props.movie.vote_average}</span></div>
        </div>              
      </div>
  );

}



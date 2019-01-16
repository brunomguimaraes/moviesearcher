import React from 'react'

export default props => {

    const { movies } = props;
    console.log(movies)

    return (
        <div>
            {movies.forEach(movie => <div>{movie.title}{console.log(movie.title)}</div>)}
        </div>
    
    )
}
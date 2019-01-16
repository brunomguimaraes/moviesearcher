import React from 'react'

class Movies extends React.Component {
    movieDetails() {
        console.log('Test View')
    }

    render() {
        return <div className='containerMovie'>
                <div className='movieCard' onClick={this.movieDetails}><table key={this.props.movie.id}>
               
            <tbody>
            <tr>
              <td>
              <img alt='poster' width='250'src={this.props.movie.poster}/>
              </td>
              <td>
                <div className='movieCardTitle'>
              <h2>{this.props.movie.title}</h2>
                </div>
              <h3>{this.props.movie.rating}</h3>
              <h5>{this.props.movie.release_date}</h5>
              <p>{this.props.movie.overview}</p>
              <p>{this.props.movie.genre_ids}</p>
              </td>
            </tr>
  
          </tbody>
        </table>
        </div>
    </div>
    }

}

export default Movies
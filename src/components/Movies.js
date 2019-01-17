import React from "react";

class Movies extends React.Component {
  render() {
    return (
      <div className="containerMovie">
        <h2>{this.props.movie.title}</h2>
        <h2>{this.movie.title}</h2>
        <h2>{this.title}</h2>

        {/* <div className='movieCard'><table key={this.props.movie.id}>
               <tbody>
            <tr>
              <td>
              <img alt='poster' width='250'src={this.props.movie.poster}/>
              </td>
              <td>
                <div className='movieCardTitle'>
              <h2>{this.props.movie.title}</h2>
                </div>
                <div className='movieCardRating'>
              <h3 className='movieblockRating'>{this.props.movie.rating}</h3>
                </div>
              <h5>{this.props.movie.release_date}</h5>
              <p>{this.props.movie.overview}</p>
              <p>{this.props.movie.genre_ids}</p>
              </td>
            </tr>
  
          </tbody>
        </table>
        </div> */}
      </div>
    );
  }
}

export default Movies;

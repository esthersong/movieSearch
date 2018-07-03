import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => (
  <div className="col-md-3">
    <div className="movie">
      <img src={`http://image.tmdb.org/t/p/w92/${movie.poster_path}`}/>
      <h2>{movie.title}</h2>
      <p><span className="label">release date:</span> {movie.release_date}</p>
      <p><span className="label">rating:</span> {movie.vote_average}</p>
      </div>
  </div>
)

export default Movie

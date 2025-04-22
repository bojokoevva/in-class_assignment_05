import React from 'react';

// Shows information about the selected movie
const MovieDisplay = ({ movie }) => {
  return (
    <div className="movie-display">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-year">{movie.year}</p>
    </div>
  );
};

export default MovieDisplay;

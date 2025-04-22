import React from 'react';
import MovieCard from './MovieCard';

// Display a list of MovieCard components
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {/* Loop through movies array and render a MovieCard for each */}
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          title={movie.Title} 
          year={movie.Year} 
          poster={movie.Poster} 
        />
      ))}
    </div>
  );
};

export default MovieList;

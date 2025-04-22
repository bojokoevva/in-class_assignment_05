import React from 'react';

// Display movie poster, title, and year inside a styled card
const MovieCard = ({ title, year, poster }) => {
  return (
    <div className="movie-card">
      {/* Display movie poster, use a placeholder if poster not available */}
      <img src={poster !== 'N/A' ? poster : 'https://via.placeholder.com/150'} alt={title} className="movie-poster" />
      {/* Display movie title */}
      <h3 className="movie-title">{title}</h3>
      {/* Display release year */}
      <p className="movie-year">{year}</p>
    </div>
  );
};

export default MovieCard;
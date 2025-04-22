import React from 'react';

// Genre selector component with buttons
const GenreSelector = ({ onSelectGenre }) => {
  const genres = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Animation"];

  return (
    <div className="genre-selector">
      {genres.map((genre) => (
        <button 
          key={genre} 
          className="genre-button" 
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelector;

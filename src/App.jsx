import React, { useState } from 'react';
import GenreSelector from './components/GenreSelector';
import MovieDisplay from './components/MovieDisplay';
import SearchBar from './components/SearchBar';
import './styles/styles.css';

/*
  App: Movie Explorer
  Features:
    - Show 6 genres to choose from
    - Display 1 movie per genre
    - Allow search for any movie
  Components: GenreSelector, MovieDisplay, SearchBar
*/

// Predefined movies by genre
const genreMovies = {
  Action: { title: "Mad Max: Fury Road", year: "2015", poster: "https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_SY679_.jpg" },
  Comedy: { title: "The Grand Budapest Hotel", year: "2014", poster: "https://m.media-amazon.com/images/I/91zZC2nKDzL._AC_SY679_.jpg" },
  Drama: { title: "The Shawshank Redemption", year: "1994", poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg" },
  "Sci-Fi": { title: "Inception", year: "2010", poster: "https://m.media-amazon.com/images/I/5101xU2WbdL._AC_.jpg" },
  Horror: { title: "Get Out", year: "2017", poster: "https://m.media-amazon.com/images/I/81VKR7bRz+L._AC_SY679_.jpg" },
  Animation: { title: "Spider-Man: Into the Spider-Verse", year: "2018", poster: "https://m.media-amazon.com/images/I/91qfZ6F1x3L._AC_SY679_.jpg" },
};

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Genre selection processing
  const handleGenreSelect = (genre) => {
    setSelectedMovie(genreMovies[genre]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Movie Explorer</h1>
      <SearchBar />
      <GenreSelector onSelectGenre={handleGenreSelect} />
      {selectedMovie && <MovieDisplay movie={selectedMovie} />}
    </div>
  );
};

export default App;
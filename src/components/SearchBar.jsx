import React, { useState } from 'react';

// Search bar without API, just an alert for demonstration
const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Search not implemented. You searched for: "${query}"`);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search movies..." 
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;

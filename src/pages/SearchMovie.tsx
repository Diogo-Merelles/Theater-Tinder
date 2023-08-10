// src/pages/SearchResults.tsx
import React, { useState } from 'react';
import { fetchMoviesBySearch } from '../services/api';
import { Movie } from '../types'; // Import Movie type

const SearchResults: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleSearch = async () => {
    const results = await fetchMoviesBySearch(searchQuery);
    setSearchResults(results);
  };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

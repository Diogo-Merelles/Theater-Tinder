import React, { useState } from 'react';
import { useMovies } from '../context/MovieContext';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types';

const SearchResults: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const { addFavorite, addToWallOfShame } = useMovies();

  const handleSearch = async () => {
    const data = await searchMovies(query);
    setResults(data);
  };

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      
      {results.map(movie => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
          <button onClick={() => addFavorite(movie)}>Like</button>
          <button onClick={() => addToWallOfShame(movie)}>Dislike</button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

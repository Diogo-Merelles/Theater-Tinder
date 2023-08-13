// Favorites.tsx

import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Favorites: React.FC = () => {
  const { favorites, removeFromFavorites, addToWallOfShame } = useMovies();

  return (
    <div>
      {favorites.map(movie => (
        <div key={movie.id}>
          <MovieCard 
            movie={movie} 
            onTransfer={() => {
              addToWallOfShame(movie);
              removeFromFavorites(movie.id);
            }}
          />
          <button onClick={() => removeFromFavorites(movie.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;

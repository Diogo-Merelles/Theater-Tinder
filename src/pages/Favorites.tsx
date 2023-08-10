// src/pages/Favorites.tsx
import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import { Movie } from '../types'; // Import Movie type

const Favorites: React.FC = () => {
  const { likedMovies } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <ul>
        {likedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

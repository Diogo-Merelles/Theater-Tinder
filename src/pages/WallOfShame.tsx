// src/pages/WallOfShame.tsx
import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import { Movie } from '../types'; // Import Movie type

const WallOfShame: React.FC = () => {
  const { dislikedMovies } = useMovieContext();

  return (
    <div className="wall-of-shame">
      <h2>Wall of Shame</h2>
      <ul>
        {dislikedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WallOfShame;

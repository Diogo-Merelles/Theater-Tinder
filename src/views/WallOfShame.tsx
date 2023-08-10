import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const WallOfShame: React.FC = () => {
  const { wallOfShame } = useMovies();

  return (
    <div>
      {wallOfShame.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default WallOfShame;


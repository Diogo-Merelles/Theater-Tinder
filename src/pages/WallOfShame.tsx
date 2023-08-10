import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieList from '../components/MovieList';

const WallOfShame: React.FC = () => {
  const { dislikedMovies } = useMovieContext();

  return (
    <div>
      <h1>Wall of Shame</h1>
      <MovieList movies={dislikedMovies} />
    </div>
  );
};

export default WallOfShame;

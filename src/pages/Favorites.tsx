import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieList from '../components/MovieList';

const Favorites: React.FC = () => {
  const { likedMovies } = useMovieContext();

  return (
    <div>
      <h1>Favorites</h1>
      <MovieList movies={likedMovies} />
    </div>
  );
};

export default Favorites;

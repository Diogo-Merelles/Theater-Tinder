import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Favorites: React.FC = () => {
  const { favorites } = useMovies();

  return (
    <div>
      {favorites.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default Favorites;

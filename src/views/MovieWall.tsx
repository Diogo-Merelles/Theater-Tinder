import React, { useEffect, useState } from 'react';
import { useMovies } from '../context/MovieContext';
import { fetchRandomMovie } from '../services/api';
import { Movie } from '../types';
import MovieCard from '../components/MovieCard'; // Assuming you have this component

const MovieWall: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { addFavorite, addToWallOfShame } = useMovies();

  useEffect(() => {
    const getRandomMovie = async () => {
      const data = await fetchRandomMovie();
      setMovie(data);
    };
    getRandomMovie();
  }, []);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <MovieCard movie={movie} />
      <button onClick={() => addFavorite(movie)}>Like</button>
      <button onClick={() => addToWallOfShame(movie)}>Dislike</button>
    </div>
  );
};

export default MovieWall;

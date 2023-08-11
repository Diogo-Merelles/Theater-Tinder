import React, { useEffect, useState } from 'react';
import { useMovies } from '../context/MovieContext';
import { fetchRandomMovie } from '../services/api';
import { Movie } from '../types';
import MovieCard from '../components/MovieCard';

const MovieWall: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { addFavorite, addToWallOfShame } = useMovies();

  const getRandomMovie = async () => {
    try {
      const data = await fetchRandomMovie();
      setMovie(data);
    } catch (error) {
      console.error("Failed to fetch a random movie:", error);
    }
  };

  useEffect(() => {
    getRandomMovie();
  }, []);

  const handleLike = () => {
    if (movie) {
      addFavorite(movie);
      getRandomMovie();  // Fetch a new random movie
    }
  };

  const handleDislike = () => {
    if (movie) {
      addToWallOfShame(movie);
      getRandomMovie();  // Fetch a new random movie
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <MovieCard movie={movie} />
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
};

export default MovieWall;


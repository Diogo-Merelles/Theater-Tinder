// src/pages/MovieWall.tsx
import React, { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import LikeButtons from '../components/LikeButtons';
import { fetchRandomMovie } from '../services/api';
import { Movie } from '../types'; // Import Movie type

const MovieWall: React.FC = () => {
  const { addLikedMovie, addDislikedMovie } = useMovieContext();
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  const handleLike = () => {
    if (currentMovie) {
      addLikedMovie(currentMovie);
    }
    fetchNextMovie();
  };

  const handleDislike = () => {
    if (currentMovie) {
      addDislikedMovie(currentMovie);
    }
    fetchNextMovie();
  };

  const fetchNextMovie = async () => {
    const movie = await fetchRandomMovie();
    setCurrentMovie(movie);
  };

  return (
    <div className="movie-wall">
      {currentMovie && (
        <>
          <MovieCard movie={currentMovie} onLike={handleLike} onDislike={handleDislike} />
          <LikeButtons onLike={handleLike} onDislike={handleDislike} />
        </>
      )}
    </div>
  );
};

export default MovieWall;

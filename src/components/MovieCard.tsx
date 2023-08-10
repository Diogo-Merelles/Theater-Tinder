// src/components/MovieCard.tsx
import React from 'react';
import { Movie } from '../types'; // Import Movie type

interface MovieCardProps {
  movie: Movie;
  onLike: () => void;
  onDislike: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onLike, onDislike }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <button onClick={onLike}>Like</button>
      <button onClick={onDislike}>Dislike</button>
    </div>
  );
};

export default MovieCard;

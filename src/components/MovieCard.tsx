import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onTransfer?: () => void;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard: React.FC<MovieCardProps> = ({ movie, onTransfer }) => {
  return (
    <div>
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      {onTransfer && <button onClick={onTransfer}>Transfer</button>}
    </div>
  );
};

export default MovieCard;


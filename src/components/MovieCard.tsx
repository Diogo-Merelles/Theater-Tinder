import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div>
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieCard;


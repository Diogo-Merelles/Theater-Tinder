import React from 'react';
import styled from 'styled-components';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
  }

interface MovieCardProps {
  movie: Movie;
  onLike: () => void;
  onDislike: () => void;
}

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie, onLike, onDislike }) => {
  return (
    <Card>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <button onClick={onLike}>Like</button>
      <button onClick={onDislike}>Dislike</button>
    </Card>
  );
};

export default MovieCard;

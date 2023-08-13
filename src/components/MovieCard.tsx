import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onTransfer?: () => void;
  transferLabel?: string;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Fade-in animation
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin: 1rem;
  animation: ${fadeInAnimation} 0.5s;
`;

const MovieImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

const MovieTitle = styled.h2`
  color: #005fa3;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  text-align: center;
`;

const MovieOverview = styled.p`
   font-size: 0.9rem;
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const TransferButton = styled.button`
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 1rem 0;
  width: 220px;
  transition: background-color 0.3s ease, transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    background-color: #005fa3;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie, onTransfer, transferLabel }) => {
  return (
    <CardContainer>
      <MovieImage height="700px" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieOverview>{movie.overview}</MovieOverview>
      {onTransfer && transferLabel && <TransferButton onClick={onTransfer}>{transferLabel}</TransferButton>}
    </CardContainer>
  );
};

export default MovieCard;

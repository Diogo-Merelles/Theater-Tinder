import React, { useEffect, useState } from 'react';
import { useMovies } from '../context/MovieContext';
import { fetchRandomMovie } from '../services/api';
import { Movie } from '../types';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';

const MovieWallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #e6f7ff; 
`;

const LikeButton = styled.button`
  background-color: #0077cc; 
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #005fa3;
  }
`;

const DislikeButton = styled(LikeButton)`
  background-color: #ff6b6b; /* A shade of red for dislike */
  
  &:hover {
    background-color: #d94a4a; /* A darker shade of red on hover */
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

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
    <MovieWallContainer>
      <MovieCard movie={movie} />
      <ButtonWrap>
      <LikeButton onClick={handleLike}>Like</LikeButton>
      <DislikeButton onClick={handleDislike}>Dislike</DislikeButton>
      </ButtonWrap>
    </MovieWallContainer>
  );
};

export default MovieWall;

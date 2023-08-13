import React, { useState } from 'react';
import { useMovies } from '../context/MovieContext';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #B0BEC5;
  border-radius: 4px;
  width: 300px;
  outline: none;
  &:focus {
    border-color: #2196F3;
  }
`;

const SearchButton = styled.button`
  background-color: #2196F3;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1976D2;
  }
`;

const MovieActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

interface ActionButtonProps {
  color?: string;
  hoverColor?: string;
}

const ActionButton = styled.button<ActionButtonProps>`
  background-color: ${props => props.color || '#FFEB3B'};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${props => props.hoverColor || '#FFD740'};
  }
`;

const SearchResults: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const { addFavorite, addToWallOfShame } = useMovies();

  const handleSearch = async () => {
    const data = await searchMovies(query);
    setResults(data);
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie..." />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      
      {results.map(movie => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
          <MovieActions>
            <ActionButton color="#4CAF50" hoverColor="#43A047" onClick={() => addFavorite(movie)}>Like</ActionButton>
            <ActionButton color="#F44336" hoverColor="#E53935" onClick={() => addToWallOfShame(movie)}>Dislike</ActionButton>
          </MovieActions>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

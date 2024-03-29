import React, { useState } from "react";
import { useMovies } from "../context/MovieContext";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #b0bec5;
  border-radius: 4px;
  width: 300px;
  outline: none;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #2196f3;
    transform: scale(1.01);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const SearchButton = styled.button`
  background-color: #2196f3;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1976d2;
  }
`;

const MovieActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 1rem 0;
  border-bottom: 2px solid lightblue;
  padding-bottom: 16px;
`;

interface ActionButtonProps {
  color?: string;
  hoverColor?: string;
}

const ActionButton = styled.button<ActionButtonProps>`
  background-color: ${(props) => props.color || "#FFEB3B"};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#FFD740"};
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SearchMovie: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const { addFavorite, addToWallOfShame } = useMovies();

  const handleSearch = async () => {
    const data = await searchMovies(query);
    setResults(data);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for a movie..."
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>

      {results.map((movie) => (
        <div key={movie.id}>
          <MovieCard movie={movie} />
          <MovieActions>
            <ActionButton
              color="#4CAF50"
              hoverColor="#43A047"
              onClick={() => addFavorite(movie)}
            >
              Like
            </ActionButton>
            <ActionButton
              color="#F44336"
              hoverColor="#E53935"
              onClick={() => addToWallOfShame(movie)}
            >
              Dislike
            </ActionButton>
          </MovieActions>
        </div>
      ))}
    </div>
  );
};

export default SearchMovie;

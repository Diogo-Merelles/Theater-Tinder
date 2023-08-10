// src/contexts/MovieContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../types'; // Import Movie type

interface MovieContextProps {
  children: React.ReactNode;
}

interface MovieContextType {
  likedMovies: Movie[];
  dislikedMovies: Movie[];
  addLikedMovie: (movie: Movie) => void;
  addDislikedMovie: (movie: Movie) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

const MovieProvider: React.FC<MovieContextProps> = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  const [dislikedMovies, setDislikedMovies] = useState<Movie[]>([]);

  const addLikedMovie = (movie: Movie) => {
    setLikedMovies([...likedMovies, movie]);
  };

  const addDislikedMovie = (movie: Movie) => {
    setDislikedMovies([...dislikedMovies, movie]);
  };

  const contextValue: MovieContextType = {
    likedMovies,
    dislikedMovies,
    addLikedMovie,
    addDislikedMovie,
  };

  return (
    <MovieContext.Provider value={contextValue}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;

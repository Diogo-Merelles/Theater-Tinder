import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../types';

interface MoviesContextProps {
  favorites: Movie[];
  wallOfShame: Movie[];
  addFavorite: (movie: Movie) => void;
  addToWallOfShame: (movie: Movie) => void;
}

interface MoviesProviderProps {
    children: React.ReactNode; // This is the type for children in a React component.
  }

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [wallOfShame, setWallOfShame] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    setFavorites([...favorites, movie]);
  };

  const addToWallOfShame = (movie: Movie) => {
    setWallOfShame([...wallOfShame, movie]);
  };

  return (
    <MoviesContext.Provider value={{ favorites, wallOfShame, addFavorite, addToWallOfShame }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = (): MoviesContextProps => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }
  return context;
};

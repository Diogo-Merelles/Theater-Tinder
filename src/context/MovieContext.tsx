import React, { createContext, useContext, useState, useEffect } from "react";
import { Movie } from "../types";

interface MoviesContextProps {
  favorites: Movie[];
  wallOfShame: Movie[];
  addFavorite: (movie: Movie) => void;
  addToWallOfShame: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  removeFromWallOfShame: (movieId: number) => void;
}

interface MoviesProviderProps {
  children: React.ReactNode;
}

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [wallOfShame, setWallOfShame] = useState<Movie[]>([]);

  //Local storage logic
  useEffect(() => {
    const loadedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const loadedWallOfShame = JSON.parse(
      localStorage.getItem("wallOfShame") || "[]"
    );

    setFavorites(loadedFavorites);
    setWallOfShame(loadedWallOfShame);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("wallOfShame", JSON.stringify(wallOfShame));
  }, [wallOfShame]);

  //Logic so there isn't duplocates in liked and disliked lists
  const addFavorite = (movie: Movie) => {
    if (!favorites.some((favMovie) => favMovie.id === movie.id)) {
      const updatedWallOfShame = wallOfShame.filter(
        (shameMovie) => shameMovie.id !== movie.id
      );
      setWallOfShame(updatedWallOfShame);
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  const addToWallOfShame = (movie: Movie) => {
    if (!wallOfShame.some((shameMovie) => shameMovie.id === movie.id)) {
      const updatedFavorites = favorites.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      setFavorites(updatedFavorites);
      setWallOfShame((prevShame) => [...prevShame, movie]);
    }
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    );
  };

  const removeFromWallOfShame = (movieId: number) => {
    setWallOfShame((prevShame) =>
      prevShame.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        wallOfShame,
        addFavorite,
        addToWallOfShame,
        removeFromFavorites,
        removeFromWallOfShame,
      }}
    >
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

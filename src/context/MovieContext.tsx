import { createContext, useContext, useState, ReactNode } from 'react';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface MovieContextType {
  likedMovies: Movie[];
  dislikedMovies: Movie[];
  addLikedMovie: (movie: Movie) => void;
  addDislikedMovie: (movie: Movie) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  const [dislikedMovies, setDislikedMovies] = useState<Movie[]>([]);

  const addLikedMovie = (movie: Movie) => {
    setLikedMovies((prevLikedMovies) => [...prevLikedMovies, movie]);
  };

  const addDislikedMovie = (movie: Movie) => {
    setDislikedMovies((prevDislikedMovies) => [...prevDislikedMovies, movie]);
  };

  const value: MovieContextType = {
    likedMovies,
    dislikedMovies,
    addLikedMovie,
    addDislikedMovie,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

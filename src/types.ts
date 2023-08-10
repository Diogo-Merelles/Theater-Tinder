export interface Movie {
    id: number;
    title: string;
    posterUrl: string;
  }
  
  export interface MovieContextType {
    likedMovies: Movie[];
    dislikedMovies: Movie[];
    addLikedMovie: (movie: Movie) => void;
    addDislikedMovie: (movie: Movie) => void;
  }
  
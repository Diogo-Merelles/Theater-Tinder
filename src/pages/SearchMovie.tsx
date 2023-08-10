import React, { useState, useEffect } from 'react';
import { fetchRandomMovie } from '../services/api';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import LikeButtons from '../components/LikeButtons';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
  }

const SearchResults: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const { addLikedMovie, addDislikedMovie } = useMovieContext();

  useEffect(() => {
    fetchNextMovie();
  }, []);

  const handleLike = () => {
    if (currentMovie) {
      addLikedMovie(currentMovie);
      fetchNextMovie();
    }
  };

  const handleDislike = () => {
    if (currentMovie) {
      addDislikedMovie(currentMovie);
      fetchNextMovie();
    }
  };

  const fetchNextMovie = async () => {
    const movie = await fetchRandomMovie();
    setCurrentMovie(movie);
  };

  return (
    <div>
      <h1>Search Results</h1>
      {currentMovie ? (
        <div>
          <MovieCard movie={currentMovie} onLike={handleLike} onDislike={handleDislike} />
          <LikeButtons onLike={handleLike} onDislike={handleDislike} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchResults;

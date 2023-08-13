import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import { RemoveButton, RemoveButtonWrapper } from '../Styles/RemoveButton';

const Favorites: React.FC = () => {
  const { favorites, removeFromFavorites, addToWallOfShame } = useMovies();

  return (
    <div>
      {favorites.map(movie => (
        <div key={movie.id}>
          <MovieCard 
            movie={movie} 
            onTransfer={() => {
              addToWallOfShame(movie);
              removeFromFavorites(movie.id);
            }}
            transferLabel="Transfer to Wall of Shame"
          />
          <RemoveButtonWrapper>
          <RemoveButton onClick={() => removeFromFavorites(movie.id)}>Remove from Favorites</RemoveButton>
          </RemoveButtonWrapper>
        </div>
      ))}
    </div>
  );
};

export default Favorites;

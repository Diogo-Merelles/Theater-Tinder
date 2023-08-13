import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import { RemoveButton } from '../Styles/RemoveButton';

const WallOfShame: React.FC = () => {
  const { wallOfShame, addFavorite, removeFromWallOfShame } = useMovies();

  return (
    <div>
      {wallOfShame.map(movie => (
        <div key={movie.id}>
          <MovieCard 
            movie={movie} 
            onTransfer={() => {
              addFavorite(movie);
              removeFromWallOfShame(movie.id);
            }}
            transferLabel="Transfer to Favorites"
          />
          <RemoveButton onClick={() => removeFromWallOfShame(movie.id)}>Remove from Wall of Shame</RemoveButton>
        </div>
      ))}
    </div>
  );
};

export default WallOfShame;

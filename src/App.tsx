import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MovieContext';
import MovieWall from './views/MovieWall';
import Favorites from './views/Favorites';
import WallOfShame from './views/WallOfShame';
import SearchMovie from './views/SearchMovie';

const App: React.FC = () => {
  return (
    <MoviesProvider>
      <Routes>
          <Route path="/"  element={<MovieWall/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/wall-of-shame" element={<WallOfShame/>} />
          <Route path="/search" element={<SearchMovie/>} />
      </Routes>
    </MoviesProvider>
  );
};

export default App;

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieProvider  from './context/MovieContext';
import MovieWall from './pages/MovieWall';
import Favorites from './pages/Favorites';
import WallOfShame from './pages/WallOfShame';
import SearchMovie from './pages/SearchMovie';
import './App.css'; 

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" Component={MovieWall} />
          <Route path="/favorites" Component={Favorites} />
          <Route path="/wall-of-shame" Component={WallOfShame} />
          <Route path="/search-results" Component={SearchMovie} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;

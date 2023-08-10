import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import MovieWall from './pages/MovieWall';
import Favorites from './pages/Favorites';
import WallOfShame from './pages/WallOfShame';
import SearchMovie from './pages/SearchMovie';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Switch>
          <Route path="/">
            <MovieWall />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/wall-of-shame">
            <WallOfShame />
          </Route>
          <Route path="/search-movie">
            <SearchMovie />
          </Route>
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;



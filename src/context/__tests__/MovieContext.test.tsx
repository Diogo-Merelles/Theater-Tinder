import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { MoviesProvider, useMovies } from '../MovieContext';
import '@testing-library/jest-dom/extend-expect';

const TestComponent: React.FC = () => {
  const context = useMovies();
  
  return <div data-testid="context">{JSON.stringify(context)}</div>;
}

describe('MoviesContext', () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  it('provides the movie lists and functions', () => {
    render(
      <MoviesProvider>
        <TestComponent />
      </MoviesProvider>
    );

    const context = JSON.parse(screen.getByTestId('context').textContent!);
    
    expect(context).toHaveProperty('favorites');
    expect(context).toHaveProperty('wallOfShame');
    expect(context).toHaveProperty('addFavorite');
    expect(context).toHaveProperty('addToWallOfShame');
    expect(context).toHaveProperty('removeFromFavorites');
    expect(context).toHaveProperty('transferToWallOfShame');
    expect(context).toHaveProperty('transferToFavorites');
  });

  it('saves and retrieves favorites from local storage', async () => {
    render(
      <MoviesProvider>
        <TestComponent />
      </MoviesProvider>
    );

    let context = JSON.parse(screen.getByTestId('context').textContent!);

    act(() => {
      context.addFavorite({
        id: 1,
        title: "Test Movie",
        overview: "Test Overview",
      });
    });

    expect(localStorage.getItem('favorites')).toEqual('[{"id":1,"title":"Test Movie","overview":"Test Overview","poster_path":"/test.jpg"}]');

    // Now, render again to check if we retrieve the favorites from local storage
    render(
      <MoviesProvider>
        <TestComponent />
      </MoviesProvider>
    );

    context = JSON.parse(screen.getByTestId('context').textContent!);
    expect(context.favorites).toEqual([{
      id: 1,
      title: "Test Movie",
      overview: "Test Overview",
    }]);
  });

});

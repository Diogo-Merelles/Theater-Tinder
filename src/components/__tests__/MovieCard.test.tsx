import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieCard from '../MovieCard';

const mockMovie = {
  id: 1,
  title: 'Test Movie',
  overview: 'This is a test movie overview.',
  poster_path: '/test.jpg'
};

test('renders movie details correctly', () => {
  render(<MovieCard movie={mockMovie} />);
  
  expect(screen.getByText('Test Movie')).toBeInTheDocument();
  expect(screen.getByText('This is a test movie overview.')).toBeInTheDocument();
  expect(screen.getByAltText('Test Movie')).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/test.jpg');
});

test('calls onTransfer function when button is clicked', () => {
  const onTransferMock = jest.fn();
  render(<MovieCard movie={mockMovie} onTransfer={onTransferMock} transferLabel="Transfer to Wall of Shame" />);
  
  fireEvent.click(screen.getByText('Transfer to Wall of Shame'));
  expect(onTransferMock).toHaveBeenCalledTimes(1);
});


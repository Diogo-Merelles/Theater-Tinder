import React from 'react';
import styled from 'styled-components';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
  }
  
interface MovieListProps {
  movies: Movie[];
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </ListItem>
      ))}
    </List>
  );
};

export default MovieList;

import axios from 'axios';
import { Movie } from '../types';

const BASE_URL = 'https://api.themoviedb.org/3'; 
const API_KEY = 'af2fff72d2853697571a81a37b1bd0fc'; 

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchRandomMovie = async (): Promise<Movie> => {
  try {
    const response = await axiosInstance.get('/movies/random');
    return response.data;
  } catch (error) {
    console.error('Error fetching random movie:', error);
    throw error;
  }
};

export const fetchMoviesBySearch = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get('/movies/search', {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies by search:', error);
    throw error;
  }
};


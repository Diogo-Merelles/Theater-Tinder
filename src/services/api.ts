import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3'; 
const API_KEY = 'af2fff72d2853697571a81a37b1bd0fc'; 

export const fetchRandomMovie = async () => {
    const totalPages = 10;
  
    const allMovies = [];
  
    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
      const movies = response.data.results;
      allMovies.push(...movies);
    }
      const randomIndex = Math.floor(Math.random() * allMovies.length);
    return allMovies[randomIndex];
  };
  
export const searchMovies = async (query: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query,
          language: "en-US",
          page: 1
        }
      });
  
      return response.data.results;
    } catch (error) {
      console.error("Error searching movies:", error);
      return [];
    }
  };

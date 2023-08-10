import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3'; 
const API_KEY = 'af2fff72d2853697571a81a37b1bd0fc'; 

export const fetchRandomMovie = async () => {
  // For simplicity, I'm fetching popular movies. You can adjust this to make it more random.
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const movies = response.data.results;
  return movies[Math.floor(Math.random() * movies.length)];
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

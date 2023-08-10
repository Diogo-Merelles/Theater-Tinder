import axios from "axios";

const API_KEY = 'af2fff72d2853697571a81a37b1bd0fc';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchRandomMovie = async () => {
  const response = await api.get(`/movie/popular`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results[0];
};
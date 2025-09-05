import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
        page: page,
        language: 'pt-BR'
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw error;
  }
};
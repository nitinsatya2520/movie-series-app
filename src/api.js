import axios from 'axios';

const API_KEY = '624e1a34a3929f1c7dc59cbafd94bc40';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
});

export const fetchTrendingMovies = () => api.get('/trending/movie/week');
export const searchMovies = (query) => api.get('/search/movie', { params: { query } });
export const getMovieDetails = (id) => api.get(`/movie/${id}`);
export const getSeriesDetails = (id) => api.get(`/tv/${id}`);

// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies, searchMovies } from '../api';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import './Home.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchTrendingMovies()
            .then(response => {
                console.log('Trending movies response:', response);
                setMovies(response.data.results);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching trending movies:', err);
                setError('Failed to fetch trending movies');
                setLoading(false);
            });
    }, []);

    const handleSearch = (query) => {
        setLoading(true);
        searchMovies(query)
            .then(response => {
                console.log('Search results response:', response);
                setSearchResults(response.data.results);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error searching for movies:', err);
                setError('Failed to search for movies');
                setLoading(false);
            });
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="container">
            <Search onSearch={handleSearch} />
            <h2 className="my-4">Trending Movies</h2>
            <MovieList movies={searchResults.length > 0 ? searchResults : movies} />
        </div>
    );
};

export default Home;

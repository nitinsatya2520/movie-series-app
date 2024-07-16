// src/pages/MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';
import './MovieDetails.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getMovieDetails(id)
            .then(response => {
                console.log('Movie details response:', response);
                setMovie(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching movie details:', err);
                setError('Failed to fetch movie details');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="container movie-details">
            <h1>{movie.title}</h1>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieDetails;

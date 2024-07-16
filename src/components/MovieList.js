// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies }) => {
    return (
        <div className="row">
            {movies.map(movie => (
                <div className="col-md-3 mb-4" key={movie.id}>
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <Link to={`/movie/${movie.id}`} className="btn btn-primary">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;

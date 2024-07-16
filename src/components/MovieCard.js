// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <Link to={`/movie/${movie.id}`}>
                    <img src={movie.poster_path} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;

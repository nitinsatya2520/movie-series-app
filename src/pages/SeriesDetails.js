// src/pages/SeriesDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SeriesDetails = () => {
    const { id } = useParams();
    const [series, setSeries] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/series/${id}`)
            .then(response => {
                setSeries(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch series details');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{series.name}</h1>
            <img src={series.poster_path} alt={series.name} />
            <p>{series.overview}</p>
        </div>
    );
};

export default SeriesDetails;

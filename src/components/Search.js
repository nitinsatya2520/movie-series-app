// src/components/Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex mb-4">
            <input 
                type="text" 
                className="form-control me-2" 
                placeholder="Search for movies..." 
                value={query} 
                onChange={handleChange} 
            />
            <button type="submit" className="btn btn-outline-success">Search</button>
        </form>
    );
};

export default Search;

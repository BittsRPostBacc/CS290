import React from 'react';
import '../App.css';

function MovieItem ({movie}) {
    return (
        <div className="collection-item">
            <h3>{movie.title}</h3>
            <p>{movie.year} ({movie.language})</p>
        </div>
    );
}

export default MovieItem;
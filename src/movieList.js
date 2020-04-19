import React from "react";
import PropTypes from "prop-types";
import "./movieList.css";

// state 를 사용하지 않을거면 function component 로 해도 무관.
function MovieList({ year, title, summary, poster }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movieData">
                <h3 className="movieTitle">{title}</h3>
                <h5 className="movieYear">{year}</h5>
                <p className="movieSummary">{summary}</p>
            </div>
        </div>
    );
}

MovieList.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default MovieList;

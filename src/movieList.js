import React from "react";
import PropTypes from "prop-types";

// state 를 사용하지 않을거면 function component 로 해도 무관.
function MovieList({ id, year, title, summary, poster }) {
    return <h4>{title}</h4>;
}

MovieList.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default MovieList;

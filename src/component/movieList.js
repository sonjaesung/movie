import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MovieList.css";

// state 를 사용하지 않을거면 function component 로 해도 무관.
function MovieList({ id, year, title, summary, poster, genres }) {
    // route props 를 전달 가능. pathname, state, search, hash...
    return (
        <Link
            to={{
                /*pathname: "/movie-detail",*/
                pathname: `/movie/:${id}`,
                state: {
                    id: id,
                    year: year,
                    title: title,
                    summary: summary,
                    poster: poster,
                    genres: genres,
                },
            }}
        >
            <div className="movie">
                <img src={poster} alt={title} title={title}></img>
                <div className="movieData">
                    <h3 className="movieTitle">{title}</h3>
                    <h5 className="movieYear">{year}</h5>
                    <ul className="movieGenres">
                        {/*map 은 데이터말고도 데이터 넘버를 전달해 줌*/}
                        {genres.map((genres, number) => (
                            <li key={number} className="genresList">
                                {genres}
                            </li>
                        ))}
                    </ul>
                    <p className="movieSummary">{summary.slice(0, 140)}...</p>
                </div>
            </div>
        </Link>
    );
}

MovieList.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieList;

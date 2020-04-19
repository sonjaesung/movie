import React from "react";
import axios from "axios";
import MovieList from "./movieList";

class Movie extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    drawMovieList() {}

    async getMovies() {
        // let movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
        // ES6 식 표현.
        let {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
        );
        this.setState({ movies, isLoading: false });
    }

    // component가 랜더링 완료 후.  javascript 기능 사용 가능.
    componentDidMount() {
        this.getMovies();
    }

    render() {
        let { isLoading, movies } = this.state;

        return (
            <div>
                {isLoading
                    ? "Loading..."
                    : movies.map((data) => {
                          return (
                              <MovieList
                                  key={data.id}
                                  id={data.id}
                                  year={data.year}
                                  title={data.title}
                                  summary={data.summary}
                                  poster={data.medium_cover_image}
                              />
                          );
                      })}
            </div>
        );
    }
}

export default Movie;

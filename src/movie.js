import React from "react";

class Movie extends React.Component {
    state = {
        isLoading: true,
        movie: [],
    };

    // component가 랜더링 완료 후.  javascript 기능 사용 가능.
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }

    render() {
        let { isLoading } = this.state;

        return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
    }
}

export default Movie;

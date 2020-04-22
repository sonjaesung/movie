import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        let { location, history } = this.props;

        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        let { location } = this.props;

        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;

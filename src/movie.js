import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";

function Movie() {
    return (
        <HashRouter>
            {/*라우터에는 중요한 두가지 props 가 들어감.  랜더링할곳, 무엇을 할 지.*/}
            {/* /about 를 호출 시 첫번째 / component 랜더링 그다음 /about component 랜더링*/}
            {/* exact={true} 를 해주면 url 이 정확히 일치 일때만 호출 */}
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default Movie;

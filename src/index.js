import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Movie from "./movie";

// 컴퍼넌트를 해당 경로 div 아래 생성.  하나의 컴퍼넌트만 가능.
// 컴퍼는트란 html 을 리턴하는 함수.
ReactDOM.render(<Movie />, document.getElementById("root"));

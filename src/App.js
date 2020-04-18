import React from "react";
import Test1 from "./Test1";
import PropTypes from "prop-types";

// props 로 모든 데이터를 받아 올 수 있슴, {변수명} 으로 필요데이터만 받아올 수도 있슴.
function Test2(porps /*, { rere }*/) {
    return (
        <h4>
            {porps.porps1}, {porps.testName}
        </h4>
    );
}

function Test3({ name }, { age }) {
    return (
        <h4>
            {name}, {age}
        </h4>
    );
}

// props 들의 type 을 점검.
Test3.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
};

// react 내부에서 구분을 위해 서로 다른 key 값이 필요함.
function drawTest3(user) {
    return <Test3 key={user.id} name={user.name} age={user.age} />;
}

let testValue = [
    {
        id: 1,
        name: "loki",
        age: 26,
    },
    {
        id: 2,
        name: "imoge",
        age: 32,
    },
    {
        id: 3,
        name: "Occ",
        age: 30,
    },
    {
        id: 4,
        name: "kang",
        age: 31,
    },
];

function App() {
    return (
        <div className="App">
            Hello <Test1 />
            <Test2 porps1="test" testName="testName" rere="rere" />
            {testValue.map(function (user) {
                return drawTest3(user);
            })}
        </div>
    );
}

export default App;

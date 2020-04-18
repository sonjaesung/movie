import React from "react";
import Test1 from "./Test1";

// props 로 모든 데이터를 받아 올 수 있슴, {변수명} 으로 필요데이터만 받아올 수도 있슴.
function Test2(porps /*, { rere }*/) {
    return (
        <h4>
            {porps.porps1}, {porps.testName}
        </h4>
    );
}

function Test3(porps) {
    return (
        <h4>
            {porps.userInfo.name}, {porps.userInfo.age}
        </h4>
    );
}

let testValue = [
    {
        name: "loki",
        age: 26,
    },
    {
        name: "imoge",
        age: 32,
    },
    {
        name: "Occ",
        age: 30,
    },
    {
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
                return <Test3 userInfo={user} />;
            })}
        </div>
    );
}

export default App;

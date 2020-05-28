import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // reference는 기본적으로 component의 어떤 부분을 선택할 수 있는 방법
  // document.getElementById();를 사용한 것과 동등
  const potato = useRef();
  setTimeout(() => console.log(potato.current.focus()), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
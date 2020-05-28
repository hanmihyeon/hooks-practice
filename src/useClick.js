import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// reference 가 있어서 작동하는 것
const useClick = onClick => {
  // 함수가 비어있으니까 아무일도 일어나지 않음
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    // componentDidMount일 때만 호출
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // useEffect를 리턴받은 함수는
    // componentWillUnMount일 때 리턴
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    // dependency가 없기때문에 매번 update될때마다 addevent가 되기때문에
    // dependency를 비워서 넣음
  }, []);
  return element;
};
// reference(element)를 return해서 title에 넣어주고 element가 존재하면 event를 add함
const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

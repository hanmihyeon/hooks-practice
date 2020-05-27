import React, {useState} from "react";
import ReactDOM from "react-dom";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {target: {
                value
            }} = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return {value, onChange};
};

const App = () => {
    /* const maxLen = value => value.length <= 10; */
    const maxLen = value => !value.includes("@");
    const name = useInput("jimin", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1>
            {/* value={name.value} 대신 {...name} 으로 쓸 수 있다. */}
            <input placeholder="name" value={name.value} onChange={name.onChange}/>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

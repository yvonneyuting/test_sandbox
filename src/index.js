import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [name, setName] = useState('');
  const handleChange = (e) => {
      setName(e.target.value);
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" value={name} onChange={handleChange}/>
      <div>輸入文字：{name}ccc</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

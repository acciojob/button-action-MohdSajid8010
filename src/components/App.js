import React, { useState } from "react";
import './../styles/App.css';

let p_content = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
const App = (props) => {
  let [content, setContent] = useState("");
  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={() => setContent(p_content)}>Show para</button>

      <p id="para" className="hide">{content}</p>
    </div>
  );
}

export default App

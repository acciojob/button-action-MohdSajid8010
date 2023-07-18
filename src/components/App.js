import React, { useState } from "react";
import './../styles/App.css';

let p_content = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
const App = (props) => {
  let [content, setContent] = useState("");
  let [clName,setclName]=useState("hide")

  function show_content()
  {
     setContent(p_content)
     setclName("show")
  }
  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={show_content}>Show para</button>

      <p id="para" className={clName}>{content}</p>
    </div>
  );
}

export default App

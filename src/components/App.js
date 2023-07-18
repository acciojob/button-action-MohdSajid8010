import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  let [pVisible, setPVisible] = useState("hide")
  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={() => setPVisible("show")}>Show para</button>
      {
        pVisible == "hide" ? ("") : (<p id="para" className="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
      }

    </div>
  );
}

export default App

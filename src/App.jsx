import "./styles.css";
import React, { useState } from "react";

function App() {
  let Time = new Date().toLocaleTimeString();
  const [count, setTime] = useState(Time);
  let increase = () => {
    setTime((Time = new Date().toLocaleTimeString()));
  };
  setInterval(increase, 1000);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={increase}
        style={{ background: "lightgreen", width: "70px", margin: "20px" }}
      >
        Get time
      </button>
    </div>
  );
}
export default App;

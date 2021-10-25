import "./styles.css";
import React, { useState } from "react";

function App() {
  let Time = new Date().toLocaleTimeString();
  const [time, setTime] = useState(Time);
  let increase = () => {
    setTime((Time = new Date().toLocaleTimeString()));
  };
  setInterval(increase, 1000);
  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  );
}
export default App;

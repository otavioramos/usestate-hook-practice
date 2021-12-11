import React, {useState} from "react";

function App() {
  let initialTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(initialTime);

  setInterval(getTime, 1000);

  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;

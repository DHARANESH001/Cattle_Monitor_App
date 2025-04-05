import React, { useState } from "react";
import CattleAlert from "./components/CattleAlert";
import "./App.css";

function App() {
  const initialAlerts = [
    { id: 1, message: "ID 1: Cattle Resting Too Long", progress: 0 },
    { id: 2, message: "ID 2: Cattle Not Eating", progress: 0 },
    { id: 3, message: "ID 3: Low Movement Detected", progress: 0 },
    { id: 4, message: "ID 4: Unusual Heart Rate", progress: 0 },
  ];

  const [alerts, setAlerts] = useState(initialAlerts);
  const [resetSignal, setResetSignal] = useState(false);

  const clearAlerts = () => {
    setResetSignal((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="alert-box">
        <button className="clear-button" onClick={clearAlerts}>
          <span>CLEAR</span>
        </button>

        <div className="alert-list">
          {alerts.map((alert, index) => (
            <CattleAlert
              key={alert.id}
              message={alert.message}
              isHighlighted={index === 1}
              resetSignal={resetSignal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import CattleAlert from "./components/CattleAlert";
import "./App.css";

function App() {
  const initialAlerts = [
    { id: 1, sensingHours: 8, restingHours: 5 },
    { id: 2, sensingHours: 10, restingHours: 7.6 }, // This will trigger red alert
    { id: 3, sensingHours: 6, restingHours: 2 },
    { id: 4, sensingHours: 12, restingHours: 6 },
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
          {alerts.map((alert) => (
            <CattleAlert
              key={alert.id}
              id={alert.id}
              sensingHours={alert.sensingHours}
              restingHours={alert.restingHours}
              resetSignal={resetSignal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

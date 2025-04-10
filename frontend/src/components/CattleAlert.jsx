import React, { useEffect, useState } from "react";
import "./CattleAlert.css";

const CattleAlert = ({ id, sensingHours, restingHours, resetSignal }) => {
  const [statusClass, setStatusClass] = useState("");

  useEffect(() => {
    const ratio = (restingHours / sensingHours) * 100;
    if (ratio > 75) {
      setStatusClass("red-alert");
    } else if (ratio > 50) {
      setStatusClass("highlighted");
    } else {
      setStatusClass("");
    }
  }, [restingHours, sensingHours]);

  useEffect(() => {
    setStatusClass("");
  }, [resetSignal]);

  return (
    <div className={`alert-item ${statusClass}`} role="alert">
      {statusClass === "red-alert" && (
        <div className="alert-icon">⚠️</div>
      )}
      <div className="id-heading">Cattle ID: {id}</div>
      <div className="time-boxes">
        <div className="time-card sensing">
          <p>Sensing Time</p>
          <h4>{sensingHours} hrs</h4>
        </div>
        <div className="time-card resting">
          <p>Resting Time</p>
          <h4>{restingHours} hrs</h4>
        </div>
      </div>
    </div>
  );
};

export default CattleAlert;

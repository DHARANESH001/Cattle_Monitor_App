import React, { useEffect, useState } from "react";
import "./CattleAlert.css";

const CattleAlert = ({ message, resetSignal }) => {
  const [progress, setProgress] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev < 100 ? prev + 10 : 100;
        setIsHighlighted(newProgress > 75);
        return newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Reset progress when resetSignal changes
  useEffect(() => {
    setProgress(0);
    setIsHighlighted(false);
  }, [resetSignal]);

  return (
<div
  className={`alert-item ${isHighlighted ? "highlighted" : ""}`}
  style={{ animationDelay: `${Math.random() * 0.3}s` }} 
  role="alert"
>
  
      <div className="icon">⚠️</div>
      <div className="alert-content">
        <p>{message}</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CattleAlert;

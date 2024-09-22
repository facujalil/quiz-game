import React, { useEffect } from "react";
import "../css/Countdown.css";

function Countdown({ countdown, setCountdown }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => {
        if (countdown === 0) {
          clearInterval(interval);
        } else {
          return countdown - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="countdown">
      <span>{countdown}</span>
    </div>
  );
}

export default Countdown;

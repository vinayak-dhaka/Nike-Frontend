import { useState, useEffect } from "react";

const LoadingSpinner = () => {




  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="d-flex flex-column align-items-center spinner">
      <div
        className="spinner-border mb-3"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      <p className="text-center" style={{ maxWidth: "400px" }}>
        Request sent to backend for data call. Please wait while data is
        fetched. <br />
     
      </p>

     
    </div>
  );
};

export default LoadingSpinner;

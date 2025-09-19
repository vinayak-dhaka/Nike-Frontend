import { useState, useEffect } from "react";

const LoadingSpinner = () => {
  const [timeLeft, setTimeLeft] = useState(4 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

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
        <strong>NOTE:</strong> As the backend API is hosted on a free platform
        called <em>Render</em>, it might take a few minutes. <br />⏳ Minimum
        waiting time: <strong>4 minutes</strong>
      </p>

      <h4 className={timeLeft === 0 ? "text-success" : "text-danger"}>
        Time Remaining: {formatTime(timeLeft)}
      </h4>
    </div>
  );
};

export default LoadingSpinner;

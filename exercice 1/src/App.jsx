import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    const scoreWidth = `${(score / 10) * 100}%`; // Scale width based on score

    let scoreColor = "#f3bc47"; // Default color
    if (score >= 7) scoreColor = "#4caf50"; // Green for high scores
    else if (score <= 3) scoreColor = "#e74c3c"; // Red for low scores

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height: "20px",
      transition: "width 0.3s ease-in-out",
    };
  };

  return (
    <div className="score-panel" style={{ textAlign: "center", padding: "20px" }}>
      <h1>My Score in React</h1>

      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => setScore(Math.min(10, Math.max(0, Number(e.target.value))))} // Ensure value is between 0-10
        style={{ marginLeft: "10px", padding: "5px" }}
      />

      <div className="score-bar" style={{ marginTop: "10px", width: "100%", backgroundColor: "#ddd", height: "20px" }}>
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}
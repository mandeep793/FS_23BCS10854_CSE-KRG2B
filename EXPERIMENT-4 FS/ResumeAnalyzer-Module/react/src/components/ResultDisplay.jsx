import React from "react";

function ResultDisplay({ result }) {
  return (
    <div className="result-card">
      <h2>Analysis Result</h2>
      <p><strong>Match Score:</strong> {result.score}%</p>

      <h3>Missing Skills:</h3>
      <ul>
        {result.missing_skills.length > 0 ? (
          result.missing_skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))
        ) : (
          <li>All skills matched!</li>
        )}
      </ul>
    </div>
  );
}

export default ResultDisplay;

import React from "react";

export default function ResultDisplay({ result }) {
  return (
    <div>
      <h3>Match Score: {result.matchScore}%</h3>
      <h4>Missing Skills:</h4>
      <ul>
        {result.missingSkills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}

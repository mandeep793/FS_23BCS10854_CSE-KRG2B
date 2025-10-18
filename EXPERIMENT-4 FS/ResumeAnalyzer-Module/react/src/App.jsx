import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm.jsx";
import ResultDisplay from "./components/ResultDisplay.jsx";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1 className="title">SkillSync Resume Analyzer</h1>
      <ResumeForm setResult={setResult} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;

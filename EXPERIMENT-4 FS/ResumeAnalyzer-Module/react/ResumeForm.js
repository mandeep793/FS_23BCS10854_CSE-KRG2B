import React, { useState } from "react";
import axios from "axios";
import ResultDisplay from "./ResultDisplay";

export default function ResumeForm() {
  const [file, setFile] = useState(null);
  const [jd, setJD] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jd);
    const res = await axios.post("http://localhost:8080/api/resume/analyze", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    setResult(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={e => setFile(e.target.files[0])}/>
        <textarea placeholder="Paste Job Description" value={jd} onChange={e => setJD(e.target.value)} />
        <button type="submit">Analyze</button>
      </form>
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

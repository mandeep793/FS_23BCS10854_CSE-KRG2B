import React, { useState } from "react";
import { analyzeResume } from "../services/api.js";

function ResumeForm({ setResult }) {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile || !jobDesc) {
      alert("Please upload a resume and enter a job description!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_description", jobDesc);

    const res = await analyzeResume(formData);
    setResult(res);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Upload Resume (PDF/DOCX):</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResumeFile(e.target.files[0])}
        />

        <label>Paste Job Description:</label>
        <textarea
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          placeholder="Enter job description here..."
        ></textarea>

        <button type="submit">Analyze Resume</button>
      </form>
    </div>
  );
}

export default ResumeForm;

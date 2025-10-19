import React, { useState } from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobResults, setJobResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  // Upload resume
  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleResumeUpload = async (e) => {
    e.preventDefault();
    if (!resumeFile) return alert("Please select a resume!");
    const formData = new FormData();
    formData.append("file", resumeFile);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/upload-resume", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) alert("✅ " + data.message);
      else alert("❌ Error: " + (data.error || "Upload failed"));
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  // Fetch jobs from backend
  const handleScrapeJobs = async () => {
    if (!jobTitle) return alert("Please enter a job title!");
    setLoading(true);
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/jobs/?keyword=${jobTitle}&resume_filename=${
          resumeFile ? resumeFile.name : ""
        }`
      );
      const data = await res.json();
      setJobResults(data.results || []);
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to fetch jobs: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-dashboard-container">
      <h2 className="dashboard-heading">Job Seeker Dashboard</h2>

      {/* Resume Upload */}
      <div className="upload-section">
        <label htmlFor="resumeUpload" className="upload-label">
          Upload Your Resume:
        </label>
        <input
          type="file"
          id="resumeUpload"
          accept=".pdf,.docx"
          onChange={handleResumeChange}
        />
        <button onClick={handleResumeUpload} className="upload-btn">
          Upload
        </button>
        {resumeFile && <p>📄 {resumeFile.name}</p>}
      </div>

      {/* Job Search */}
      <div className="job-search-section">
        <input
          type="text"
          placeholder="Enter Job Title (e.g. React Developer)"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="job-input"
        />
        <button
          className="search-btn"
          onClick={handleScrapeJobs}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Jobs"}
        </button>
      </div>

      {/* Job Results */}
      <div className="job-results">
        {loading && <p>Fetching jobs...</p>}

        {!loading && jobResults.length > 0 && (
          <div>
            <h3>🔎 Found {jobResults.length} Jobs:</h3>
            {jobResults.map((job, index) => (
              <div key={index} className="job-card">
                <h4>{job.title}</h4>
                <p>
                  <strong>Company:</strong> {job.company}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {job.description.slice(0, 250)}...
                </p>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  View Full Job
                </a>

                {/* Matching score */}
                {job.matching_score !== undefined && (
                  <div className="score-container">
                    <p>Matching Score: {job.matching_score}%</p>
                    <div className="score-bar">
                      <div
                        className="score-fill"
                        style={{ width: `${job.matching_score}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {!loading && jobResults.length === 0 && (
          <p>No jobs found yet. Try searching!</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

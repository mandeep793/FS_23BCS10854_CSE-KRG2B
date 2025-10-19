import React, { useState } from "react";
import JobPostForm from "./JobPostForm";
import JobList from "./JobList";
import "./styles.css";

const RecruiterDashboard = () => {
  const [tab, setTab] = useState("jobs");

  return (
    <div className="recruiter-dashboard">
      <h1>Recruiter Dashboard</h1>
      <div className="tabs">
        <button onClick={() => setTab("jobs")}>Jobs</button>
        <button onClick={() => setTab("post")}>Post Job</button>
      </div>

      <div className="content">
        {tab === "jobs" && <JobList />}
        {tab === "post" && <JobPostForm />}
      </div>
    </div>
  );
};

export default RecruiterDashboard;

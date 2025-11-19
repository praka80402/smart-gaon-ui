import React, { useState } from "react";

export default function ReportProblem() {
  const [problem, setProblem] = useState("");
  const [reports, setReports] = useState([]);

  const handleSubmit = () => {
    if (!problem.trim()) return;
    setReports([
      { text: problem, status: "Pending", date: new Date().toLocaleString() },
      ...reports,
    ]);
    setProblem("");
  };

  return (
    <div>
      <h2>⚠️ Report a Problem</h2>
      <p>Submit issues related to your village and track their resolution.</p>

      <textarea
        placeholder="Describe the problem..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        style={{ width: "100%", height: "80px", marginTop: "10px" }}
      />
      <button
        onClick={handleSubmit}
        style={{ marginTop: "10px", background: "#1f8a38", color: "white" }}
      >
        Submit Report
      </button>

      <h3 style={{ marginTop: "20px" }}>Your Reports</h3>
      {reports.map((r, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            marginTop: "10px",
            background: "#fff",
          }}
        >
          <p>{r.text}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: r.status === "Pending" ? "orange" : "green" }}>
              {r.status}
            </span>
          </p>
          <small>{r.date}</small>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";

export default function JobBoard() {
  const [jobs] = useState([
    {
      title: "Field Assistant",
      location: "Muzaffarpur",
      contact: "9876543210",
    },
    {
      title: "Farm Equipment Operator",
      location: "Patna",
      contact: "9123456780",
    },
  ]);

  return (
    <div>
      <h2>💼 Job Board</h2>
      <p>Find jobs in and around your village. Apply easily!</p>

      {jobs.map((job, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginTop: "15px",
            background: "#fff",
          }}
        >
          <h3>{job.title}</h3>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Contact:</strong>{" "}
            <a href={`tel:${job.contact}`} style={{ color: "#1f8a38" }}>
              {job.contact}
            </a>
          </p>
          <button style={{ marginTop: "8px", background: "#1f8a38", color: "white" }}>
            Apply via Call
          </button>
        </div>
      ))}
    </div>
  );
}

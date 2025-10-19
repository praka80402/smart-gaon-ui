import React from "react";
import { Link } from "react-router-dom";
import "./SchoolLearning.css";

export default function SchoolLearning() {
  const classes = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="school-container">
       <Link to="/shiksha-sahayak" className="back-arrow">
        ← Back
      </Link>
      <h1 className="school-title">NCERT Syllabus</h1>
      <p className="school-subtitle">Here are what you have asked for</p>
      {/* <input
        type="text"
        placeholder="Search"
        className="school-search"
      /> */}
      
      <div className="class-grid">
        {classes.map((cls) => (
          <Link key={cls} to={`/shiksha-sahayak/school-learning/class/${cls}`} style={{ textDecoration: "none" }}>
            <div className="class-card">Class {cls}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

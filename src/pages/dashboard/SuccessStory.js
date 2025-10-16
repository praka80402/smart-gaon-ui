import React from "react";
import "./SuccessStory.css";

const stories = [
  {
    name: "Ravi Kumar",
    story: "With our platform, Ravi expanded his farming network and increased crop sales by 40%.",
    location: "Uttar Pradesh",
  },
  {
    name: "Sita Devi",
    story: "Sita learned about new government schemes and got support for her dairy business.",
    location: "Bihar",
  },
  {
    name: "Amit Singh",
    story: "Amit connected with local buyers through the app and now runs a successful organic farm.",
    location: "Maharashtra",
  },
];

export default function SuccessStory() {
  return (
    <section className="success-section">
      <h2 className="success-title">Our Success Stories</h2>
      <div className="success-grid">
        {stories.map((s, i) => (
          <div key={i} className="success-card">
            <h3>{s.name}</h3>
            <p className="story">{s.story}</p>
            <p className="location">📍 {s.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

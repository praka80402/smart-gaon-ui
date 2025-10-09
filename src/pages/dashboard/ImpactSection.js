import React from "react";
import "./ImpactSection.css";

function ImpactSection() {
  const impactData = [
    { number: "10M+", label: "Villages Connected" },
    { number: "500K", label: "Users Served" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "50+", label: "States Covered" },
  ];

  return (
    <section className="impact-section">
      <h2 className="impact-title">Our Impact</h2>
      <div className="impact-cards">
        {impactData.map((item, index) => (
          <div key={index} className="impact-card">
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImpactSection;

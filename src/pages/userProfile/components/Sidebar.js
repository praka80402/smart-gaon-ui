import React from "react";
import "../Styles/Sidebar.css";

export default function Sidebar() {
  const services = [
    "Seva Bazar",
    "My Village",
    "Gram Doctor",
    "Gaon Bazar",
    "Weather Forecast",
    "Kisan Mitra",
    "Sarkari Seva",
    "Shiksha Sahayak",
    "Donation",
  ];

  return (
    <aside className="sidebar">
      <h3>Our Services</h3>
      <ul>
        {services.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </aside>
  );
}

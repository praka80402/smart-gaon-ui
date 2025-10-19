import React from "react";
import "./Connectingvillage.css";

const states = [
  { name: "Uttar Pradesh", users: "2M+ Users" },
  { name: "Maharashtra", users: "1.5M+ Users" },
  { name: "Bihar", users: "1.2M+ Users" },
  { name: "Rajasthan", users: "800K+ Users" },
  { name: "Madhya Pradesh", users: "900K+ Users" }, 
];

export default function ConnectingVillage() {
  return (
    <section className="reach-section">
      <h2 className="reach-title">Our Reach Across States</h2>
      <div className="reach-grid">
        {states.map((state, i) => (
          <div key={i} className="reach-card">
            <h3>{state.name}</h3>
            <p>{state.users}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


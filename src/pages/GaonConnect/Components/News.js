import React, { useState } from "react";

export default function News() {
  const [newsList] = useState([
    {
      title: "Gram Sabha Meeting on 20th Oct",
      date: "Oct 18, 2025",
      description:
        "All villagers are invited to the Gram Sabha meeting to discuss upcoming development projects.",
    },
    {
      title: "Health Camp Organized",
      date: "Oct 10, 2025",
      description:
        "A free health checkup camp will be organized near the Panchayat Bhawan by local doctors.",
    },
  ]);

  return (
    <div>
      <h2>📰 News & Events</h2>
      <p>Stay updated with what’s happening in your village.</p>

      {newsList.map((item, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "15px",
            background: "#fff",
          }}
        >
          <h3 style={{ color: "#1f8a38" }}>{item.title}</h3>
          <p style={{ fontSize: "0.9rem", color: "#777" }}>{item.date}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

import React from "react";

export default function GaonTalent() {
  const talents = [
    {
      name: "Ravi Kumar",
      category: "Folk Singing",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Pooja Singh",
      category: "Dance Performance",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  return (
    <div>
      <h2>🎥 Gaon Talent</h2>
      <p>Watch and celebrate talents from your village!</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {talents.map((t, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{t.name}</h3>
            <p>{t.category}</p>
            <video width="100%" height="200" controls>
              <source src={t.video} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

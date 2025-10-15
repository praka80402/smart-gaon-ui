import React from "react";

export default function Directory() {
  const directory = [
    { name: "Ramesh Kumar", role: "Sarpanch", phone: "9800001111" },
    { name: "Seema Devi", role: "Health Worker", phone: "9811112222" },
    { name: "Rajesh Patel", role: "Agriculture Expert", phone: "9822223333" },
  ];

  return (
    <div>
      <h2>📖 Village Directory</h2>
      <p>Find your local experts and Panchayat members.</p>

      <div style={{ marginTop: "15px" }}>
        {directory.map((d, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
              background: "#fff",
            }}
          >
            <h3>{d.name}</h3>
            <p>{d.role}</p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${d.phone}`} style={{ color: "#1f8a38" }}>
                {d.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

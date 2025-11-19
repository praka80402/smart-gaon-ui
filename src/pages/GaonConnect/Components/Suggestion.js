import React, { useState } from "react";

export default function Suggestion() {
  const [suggestion, setSuggestion] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    if (!suggestion.trim()) return;
    setList([{ text: suggestion, date: new Date().toLocaleString() }, ...list]);
    setSuggestion("");
  };

  return (
    <div>
      <h2>💬 Suggest Improvements</h2>
      <p>Share your ideas to make SmartGaon even better!</p>

      <textarea
        placeholder="Write your suggestion..."
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
        style={{ width: "100%", height: "80px", marginTop: "10px" }}
      />
      <button
        onClick={handleSubmit}
        style={{ marginTop: "10px", background: "#1f8a38", color: "white" }}
      >
        Submit Suggestion
      </button>

      <h3 style={{ marginTop: "20px" }}>Recent Suggestions</h3>
      {list.map((s, i) => (
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
          <p>{s.text}</p>
          <small>{s.date}</small>
        </div>
      ))}
    </div>
  );
}

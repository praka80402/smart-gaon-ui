import React, { useState } from "react";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (!content.trim()) return;
    setPosts([{ text: content, likes: 0 }, ...posts]);
    setContent("");
  };

  return (
    <div>
      <h2>Community Forum</h2>
      <p>Share updates, ideas, and experiences with your fellow villagers.</p>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write something..."
        style={{ width: "100%", height: "80px", marginTop: "10px" }}
      />
      <button onClick={handlePost} style={{ marginTop: "10px" }}>
        Post
      </button>

      <div style={{ marginTop: "20px" }}>
        {posts.map((p, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
            {p.text}
          </div>
        ))}
      </div>
    </div>
  );
}

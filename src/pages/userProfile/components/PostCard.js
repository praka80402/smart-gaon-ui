import React, { useState } from "react";
import axios from "axios";
// import "./PostCard.css";
import "../Styles/PostCard.css";
export default function PostCard({ post, fetchPosts }) {
  const token = localStorage.getItem("token");
  const [comment, setComment] = useState("");

  const handleComment = async () => {
    if (!comment.trim()) return;
    try {
      await axios.post(
        `http://localhost:8080/api/comments/${post.id}`,
        { text: comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComment("");
      fetchPosts(); // refresh comments
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{post.authorName}</strong>
        <span>{new Date(post.createdAt).toLocaleString()}</span>
      </div>
      <p>{post.content}</p>

      {post.comments?.length > 0 && (
        <div className="comments">
          {post.comments.map((c) => (
            <div key={c.id} className="comment">
              <b>{c.commenterName}</b>: {c.text}
            </div>
          ))}
        </div>
      )}

      <div className="comment-box">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleComment}>Post</button>
      </div>
    </div>
  );
}

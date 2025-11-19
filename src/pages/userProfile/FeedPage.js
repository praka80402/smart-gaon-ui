


import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./components/PostCard";
import "./Styles/Feed.css";
import Weatherdashboard from "../dashboard/Weatherdashboard";
import config from "../../config";

export default function FeedPage() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchProfile = async () => {
    try {
      const res = await axios.get(config.API_BASE_URL+"/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Profile error:", err);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get(config.API_BASE_URL+"/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePost = async () => {
    if (!content.trim()) return;
    try {
      await axios.post(
        config.API_BASE_URL+"/api/posts",
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContent("");
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchPosts();
  }, []);

  return (
    <main className="feed-main">
      <div className="welcome-banner">
       
      👋{" "}
        <strong>
          {user
            ? `${user.firstName || user.name || "User"}, welcome to SmartGaon AI !`
            : "Welcome to SmartGaon!"}
        </strong>
        <br />
        <small>
          Share updates, offers, and experiences with your village & nearby
          farmers.
        </small>
         </div>


  

      <div className="create-post">
        <textarea
          placeholder="Share something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      {posts.map((p) => (
        <PostCard key={p.id} post={p} fetchPosts={fetchPosts} />
      ))}
    </main>
  );
}

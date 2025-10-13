// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import PostCard from "./components/PostCard";
// import "./Styles/Feed.css";

// export default function FeedPage() {
//   const token = localStorage.getItem("token");
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [content, setContent] = useState("");

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/profile", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUser(res.data);
//     } catch (err) {
//       console.error("Profile error:", err);
//     }
//   };

//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/posts");
//       setPosts(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handlePost = async () => {
//     if (!content.trim()) return;
//     try {
//       await axios.post(
//         "http://localhost:8080/api/posts",
//         { content },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setContent("");
//       fetchPosts();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   useEffect(() => {
//     fetchProfile();
//     fetchPosts();
//   }, []);

//   return (
//     <div className="feed-page">
//       <Header onLogout={handleLogout} />
//       <div className="feed-container">
//         <Sidebar />
//         <main className="feed-main">
//           <div className="welcome-banner">
//             👋 Welcome to <strong>GaonConnect</strong> <br />
//             <small>
//               Share updates, offers, and experiences with your village & nearby
//               farmers.
//             </small>
//           </div>

//           <div className="create-post">
//             <textarea
//               placeholder="Share something..."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//             />
//             <button onClick={handlePost}>Post</button>
//           </div>

//           {posts.map((p) => (
//             <PostCard key={p.id} post={p} fetchPosts={fetchPosts} />
//           ))}
//         </main>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./components/PostCard";
import "./Styles/Feed.css";

export default function FeedPage() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Profile error:", err);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePost = async () => {
    if (!content.trim()) return;
    try {
      await axios.post(
        "http://localhost:8080/api/posts",
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
        {/* 👋 Welcome to <strong>SmartGaon AI</strong> <br />
        <small>
          Share updates, offers, and experiences with your village & nearby farmers.
        </small> */}
      👋{" "}
        <strong>
          {user
            ? `${user.firstName || user.name || "User"}, welcome to SmartGaon!`
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

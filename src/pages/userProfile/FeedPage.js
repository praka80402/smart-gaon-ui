


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
// -----------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PostCard from "./components/PostCard";
// import "./Styles/Feed.css";

// export default function FeedPage() {
//   const token = localStorage.getItem("token");
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [video, setVideo] = useState(null);

//   // Fetch profile
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

//   // Fetch posts
//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/posts");
//       setPosts(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Handle new post
//   const handlePost = async () => {
//     if (!content.trim() && !image && !video)
//       return alert("Please add text, image, or video to post.");

//     if (content.length > 250)
//       return alert("Post cannot exceed 250 characters!");

//     try {
//       const formData = new FormData();
//       formData.append("content", content);
//       if (image) formData.append("image", image);
//       if (video) formData.append("video", video);

//       await axios.post("http://localhost:8080/api/posts/upload", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setContent("");
//       setImage(null);
//       setVideo(null);
//       fetchPosts();
//     } catch (err) {
//       alert("Failed to post. Check file size or try again.");
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//     fetchPosts();
//   }, []);

//   return (
//     <main className="feed-main">
//       <div className="welcome-banner">
//         👋{" "}
//         <strong>
//           {user
//             ? `${user.firstName || user.name || "User"}, welcome to SmartGaon AI!`
//             : "Welcome to SmartGaon!"}
//         </strong>
//         <br />
//         <small>Share your thoughts, updates, and ideas with your community!</small>
//       </div>

//       {/* Create Post */}
//       <div className="create-post">
//         <textarea
//           placeholder="Share something (max 250 chars)..."
//           value={content}
//           maxLength={250}
//           onChange={(e) => setContent(e.target.value)}
//         />

//         <div className="upload-section">
//          <label className="file-label">
//     🖼️ Image
//     <input
//       type="file"
//       accept="image/*"
//       onChange={(e) => {
//         const file = e.target.files[0];
//         if (file && file.size > 2 * 1024 * 1024) {
//           alert("⚠️ Image size must be less than 2MB!");
//           e.target.value = ""; 
//         } else {
//           setImage(file);
//         }
//       }}
//     />
//   </label>

//           {/* <label>
//             🎥 Video 
//             <input
//               type="file"
//               accept="video/*"
//               onChange={(e) => setVideo(e.target.files[0])}
//             />
//           </label> */}
//           <label className="file-label">
//     🎥 Video
//     <input
//       type="file"
//       accept="video/*"
//       onChange={(e) => {
//         const file = e.target.files[0];
//         if (file && file.size > 15 * 1024 * 1024) {
//           alert("⚠️ Video length or size must be under 15 seconds (≈15MB)!");
//           e.target.value = "";
//         } else {
//           setVideo(file);
//         }
//       }}
//     />
//   </label>

//         </div>

//         {/* <div className="preview-section">
//           {image && (
//             <img
//               src={URL.createObjectURL(image)}
//               alt="Preview"
//               width="200"
//               style={{ borderRadius: "8px" }}
//             />
//           )}
//           {video && (
//             <video width="250" controls>
//               <source src={URL.createObjectURL(video)} type="video/mp4" />
//             </video> */}
//             <div className="preview-section">
//   {image && (
//     <div className="preview-box">
//       <img src={URL.createObjectURL(image)} alt="Preview" />
//     </div>
//   )}

//   {video && (
//     <div className="preview-box">
//       <video src={URL.createObjectURL(video)} controls />
//     </div>
//           )}
//         </div>

//         <button onClick={handlePost}>Post</button>
//       </div>

//       {/* Post Feed */}
//       {posts.map((p) => (
//         <PostCard key={p.id} post={p} fetchPosts={fetchPosts} />
//       ))}
//     </main>
//   );
// }

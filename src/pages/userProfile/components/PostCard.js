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
// ------------------

// import React, { useState } from "react";
// import axios from "axios";
//  import "../Styles/PostCard.css";

// export default function PostCard({ post, fetchPosts }) {
//   const token = localStorage.getItem("token");
//   const [isEditing, setIsEditing] = useState(false);
//   const [newContent, setNewContent] = useState(post.content);
//   const [newImage, setNewImage] = useState(null);
//   const [newVideo, setNewVideo] = useState(null);

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       await axios.delete(`http://localhost:8080/api/posts/${post.id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchPosts();
//     } catch (err) {
//       alert("Failed to delete post.");
//       console.error(err);
//     }
//   };

//   const handleEditSave = async () => {
//     if (newContent.length > 250) {
//       alert("Post cannot exceed 250 characters!");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("content", newContent);
//       if (newImage) formData.append("image", newImage);
//       if (newVideo) formData.append("video", newVideo);

//       await axios.put(`http://localhost:8080/api/posts/${post.id}`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setIsEditing(false);
//       fetchPosts();
//     } catch (err) {
//       alert("Failed to update post.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="post-card">
//       <div className="post-header">
//         <strong>{post.authorName}</strong>
//         <span className="post-date">
//           {new Date(post.createdAt).toLocaleString()}
//         </span>
//       </div>

//       {isEditing ? (
//         <>
//           <textarea
//             value={newContent}
//             onChange={(e) => setNewContent(e.target.value)}
//             maxLength={250}
//           />
//           <div className="edit-upload">
//             <label>
//               🖼️ Change Image:
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setNewImage(e.target.files[0])}
//               />
//             </label>

//             <label>
//               🎥 Change Video:
//               <input
//                 type="file"
//                 accept="video/*"
//                 onChange={(e) => setNewVideo(e.target.files[0])}
//               />
//             </label>
//           </div>

//           <div className="post-actions">
//             <span className="action-link save" onClick={handleEditSave}>
//               💾 Save
//             </span>
//             <span className="action-link cancel" onClick={() => setIsEditing(false)}>
//               ❌ Cancel
//             </span>
//           </div>
//         </>
//       ) : (
//         <>
//           <p>{post.content}</p>

//           {post.imageUrl && (
//             <img
//               src={`http://localhost:8080${post.imageUrl}`}
//               alt="Post"
//               className="post-image"
//             />
//           )}

//           {post.videoUrl && (
//             <video
//               src={`http://localhost:8080${post.videoUrl}`}
//               controls
//               className="post-video"
//             />
//           )}

//           <div className="post-actions">
//             <span className="action-link edit" onClick={() => setIsEditing(true)}>
//               ✏️ Edit
//             </span>
//             <span className="action-link delete" onClick={handleDelete}>
//               🗑️ Delete
//             </span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

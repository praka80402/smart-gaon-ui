


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./MyProfile.css";
// import userImage from "../../../assets/avatar.png";

// export default function ProfilePage() {
//   const token = localStorage.getItem("token");
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     village: "",
//     bio: "",
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);

//   // ✅ Fetch user data + image on mount
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // Fetch basic user details
//         const res = await axios.get("http://localhost:8080/api/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);

//         // Fetch profile image separately
//         const imgRes = await axios.get("http://localhost:8080/api/profile/image", {
//           headers: { Authorization: `Bearer ${token}` },
//           responseType: "arraybuffer",
//         });

//         if (imgRes.data) {
//           const imageBlob = new Blob([imgRes.data], { type: "image/jpeg" });
//           const imageUrl = URL.createObjectURL(imageBlob);
//           setImagePreview(imageUrl);
//         }
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   // ✅ Handle text field change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Handle file select
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setImagePreview(URL.createObjectURL(file)); // show preview instantly
//     }
//   };

//   // ✅ Upload new image
//   const handleUploadImage = async () => {
//     if (!selectedFile) return alert("Please select an image first!");
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       await axios.post("http://localhost:8080/api/profile/upload-image", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("Profile image uploaded successfully!");
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Error uploading image.");
//     }
//   };

//   // ✅ Save bio + village updates
//   const handleSave = async () => {
//     try {
//       await axios.put("http://localhost:8080/api/profile/update", user, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Profile updated successfully!");
//     } catch (err) {
//       console.error("Update error:", err);
//       alert("Error updating profile.");
//     }
//   };

//   return (
//     <div className="profile-center-container">
//       <div className="profile-card-center">
//         {/* 🖼️ Profile Image Section */}
//         <div className="profile-img-section">
//           <img
//             src={imagePreview || userImage}
//             alt="Profile"
//             className="profile-avatar"
//           />
//           <input
//             type="file"
//             id="fileInput"
//             hidden
//             accept="image/*"
//             onChange={handleFileChange}
//           />
//           <button
//             className="upload-btn"
//             onClick={() => document.getElementById("fileInput").click()}
//           >
//             Choose Photo
//           </button>
//           {selectedFile && (
//             <button className="upload-btn save" onClick={handleUploadImage}>
//               Upload
//             </button>
//           )}
//         </div>

//         {/* 👤 User Details */}
//         <div className="profile-info">
//           <h2>
//             {user.firstName} {user.lastName}
//           </h2>
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {user.phone}
//           </p>
//         </div>

//         {/* ✏️ Editable Fields */}
//         <div className="profile-form">
//           <label>Bio</label>
//           <textarea
//             name="bio"
//             placeholder="Tell us something about yourself..."
//             value={user.bio || ""}
//             onChange={handleChange}
//           />

//           <label>Village</label>
//           <input
//             type="text"
//             name="village"
//             value={user.village || ""}
//             placeholder="Enter your village name"
//             onChange={handleChange}
//           />

//           <button className="save-btn" onClick={handleSave}>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyProfile.css";
import userImage from "../../../assets/avatar.png";

export default function ProfilePage() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    village: "",
    bio: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  // ✅ Fetch user data + image on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);

        // Fetch profile image separately
        const imgRes = await axios.get("http://localhost:8080/api/profile/image", {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "arraybuffer",
        });

        if (imgRes.data) {
          const imageBlob = new Blob([imgRes.data], { type: "image/jpeg" });
          const imageUrl = URL.createObjectURL(imageBlob);
          setImagePreview(imageUrl);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, [token]);

  // ✅ Handle text change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle file selection + validation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = 10 * 1024 * 1024; // 10 MB
      if (file.size > maxSize) {
        setMessage("⚠️ Image size exceeds 10MB limit!");
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file)); // Instant preview
      setMessage(""); // Clear message
    }
  };

  // ✅ Upload image to backend
  const handleUploadImage = async () => {
    if (!selectedFile) return alert("Please select an image first!");
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("http://localhost:8080/api/profile/upload-image", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("✅ Image uploaded successfully!");
      setSelectedFile(null);
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Error uploading image.");
    }
  };

  // ✅ Save bio + village
  const handleSave = async () => {
    try {
      await axios.put("http://localhost:8080/api/profile/update", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("✅ Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      setMessage("❌ Error updating profile.");
    }
  };

  return (
    <div className="profile-center-container">
      <div className="profile-card-center">
        {/* 🖼️ Profile Image Section */}
        <div className="profile-img-section">
          <img
            src={imagePreview || userImage}
            alt="Profile"
            className="profile-avatar"
          />

          {/* Buttons below the image */}
          <div className="profile-btn-group">
            <input
              type="file"
              id="fileInput"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
            <button
              className="upload-btn"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Choose Photo
            </button>
            {selectedFile && (
              <button className="upload-btn save" onClick={handleUploadImage}>
                Upload
              </button>
            )}
          </div>
        </div>

        {/* 👤 User Info */}
        <div className="profile-info">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>

        {/* ✏️ Editable Fields */}
        <div className="profile-form">
          <label>Bio</label>
          <textarea
            name="bio"
            placeholder="Tell us something about yourself..."
            value={user.bio || ""}
            onChange={handleChange}
          />

          <label>Village</label>
          <input
            type="text"
            name="village"
            value={user.village || ""}
            placeholder="Enter your village name"
            onChange={handleChange}
          />

          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>

        {/* 📨 Message Display */}
        {message && <p className="status-message">{message}</p>}
      </div>
    </div>
  );
}

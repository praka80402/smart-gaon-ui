
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./MyProfile";
// import defaultAvatar from "../../../assets/avatar.png";

// export default function ProfilePage() {
//   const token = localStorage.getItem("token");
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     village: "",
//     bio: "",
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);

//   // ✅ Fetch profile data
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);

//         // Fetch image separately
//         const imgRes = await axios.get("http://localhost:8080/api/profile/image", {
//           headers: { Authorization: `Bearer ${token}` },
//           responseType: "arraybuffer",
//         });

//         if (imgRes.data) {
//           const imageBlob = new Blob([imgRes.data], { type: "image/jpeg" });
//           setImagePreview(URL.createObjectURL(imageBlob));
//         }
//       } catch (err) {
//         console.error("Profile fetch error:", err);
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   // ✅ Handle text field change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Update profile (bio, village, etc.)
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

//   // ✅ Upload image to backend
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       const previewURL = URL.createObjectURL(file);
//       setImagePreview(previewURL);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         await axios.post("http://localhost:8080/api/profile/upload-image", formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         alert("Profile image uploaded successfully!");
//       } catch (err) {
//         console.error("Image upload error:", err);
//         alert("Error uploading image.");
//       }
//     }
//   };

//   return (
//     <div className="profile-layout">
//       {/* Left Section */}
//       <div className="profile-card">
//         <div className="profile-img-container">
//           <img
//             src={imagePreview || defaultAvatar}
//             alt="Profile"
//             className="profile-pic"
//           />
//           <label htmlFor="file-upload" className="upload-btn">
//             Change Photo
//           </label>
//           <input
//             type="file"
//             id="file-upload"
//             accept="image/*"
//             onChange={handleImageUpload}
//           />
//         </div>

//         <h2>
//           {user.firstName} {user.lastName}
//         </h2>

//         <label>Bio</label>
//         <textarea
//           name="bio"
//           placeholder="Tell us something about yourself..."
//           value={user.bio || ""}
//           onChange={handleChange}
//         />

//         <label>Email</label>
//         <input type="email" name="email" value={user.email} readOnly />

//         <label>Village</label>
//         <input
//           type="text"
//           name="village"
//           placeholder="Your village name"
//           value={user.village || ""}
//           onChange={handleChange}
//         />

//         <button className="save-btn" onClick={handleSave}>
//           Save Changes
//         </button>
//       </div>

      
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyProfile.css";
// import defaultAvatar from "../../../assets/avatar.png";
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
    profileImage: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  // ✅ Fetch profile data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };
    fetchUser();
  }, [token]);

  // ✅ Handle text field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle file input
  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  // ✅ Upload new image
  const handleUploadImage = async () => {
    if (!selectedFile) return alert("Please select an image first!");
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/profile/upload-image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUser((prev) => ({ ...prev, profileImage: res.data.imageUrl }));
      alert("Profile image updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to upload image");
    }
  };

  // ✅ Save bio + village updates
  const handleSave = async () => {
    try {
      await axios.put("http://localhost:8080/api/profile/update", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating profile");
    }
  };

  return (
    <div className="profile-center-container">
      <div className="profile-card-center">
        {/* 🖼️ Image */}
        <div className="profile-img-section">
          <img
            src={user.profileImage || userImage}
            alt="Profile"
            className="profile-avatar"
          />
          <input
            type="file"
            id="fileInput"
            hidden
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

        {/* 👤 User Details */}
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
      </div>
    </div>
  );
}
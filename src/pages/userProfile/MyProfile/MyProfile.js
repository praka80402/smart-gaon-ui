
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./MyProfile.css";
// import userImage from "../../../assets/avatar.png";

// export default function ProfilePage() {
//   const token = localStorage.getItem("token");
//   const [user, setUser] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   village: "",
//   bio: "",
//   occupation: "",
// });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
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

//   // ✅ Handle text change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

  


//   // ✅ Handle file selection + validation
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const maxSize = 10 * 1024 * 1024; // 10 MB
//       if (file.size > maxSize) {
//         setMessage("⚠️ Image size exceeds 10MB limit!");
//         setSelectedFile(null);
//         return;
//       }
//       setSelectedFile(file);
//       setImagePreview(URL.createObjectURL(file)); // Instant preview
//       setMessage(""); // Clear message
//     }
//   };

//   // ✅ Upload image to backend
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
//       setMessage("✅ Image uploaded successfully!");
//       setSelectedFile(null);
//     } catch (err) {
//       console.error("Upload error:", err);
//       setMessage("❌ Error uploading image.");
//     }
//   };

//   // ✅ Save bio + village
//   const handleSave = async () => {
//     try {
//       await axios.put("http://localhost:8080/api/profile/update", user, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMessage("✅ Profile updated successfully!");
//     } catch (err) {
//       console.error("Update error:", err);
//       setMessage("❌ Error updating profile.");
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

//           {/* Buttons below the image */}
//           <div className="profile-btn-group">
//             <input
//               type="file"
//               id="fileInput"
//               hidden
//               accept="image/*"
//               onChange={handleFileChange}
//             />
//             <button
//               className="upload-btn"
//               onClick={() => document.getElementById("fileInput").click()}
//             >
//               Choose Photo
//             </button>
//             {selectedFile && (
//               <button className="upload-btn save" onClick={handleUploadImage}>
//                 Upload
//               </button>
//             )}
//           </div>
//         </div>

//         {/* 👤 User Info */}
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
//           <label>Occupation</label>
//            <input
//              type="text"
//             name="occupation"
//             value={user.occupation || ""}
//               placeholder="Enter your occupation"
//               onChange={handleChange}
//                   />


//           <button className="save-btn" onClick={handleSave}>
//             Save Changes
//           </button>
//         </div>

//         {/* 📨 Message Display */}
//         {message && <p className="status-message">{message}</p>}
//       </div>
//     </div>
//   );
// }
// ----------------------------------

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
//     occupation: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [message, setMessage] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//     const [passwords, setPasswords] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   // ✅ Fetch user data & image on load
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);

//         // Fetch image
//         const imgRes = await axios.get("http://localhost:8080/api/profile/image", {
//           headers: { Authorization: `Bearer ${token}` },
//           responseType: "arraybuffer",
//         });

//         if (imgRes.data) {
//           const blob = new Blob([imgRes.data], { type: "image/jpeg" });
//           setImagePreview(URL.createObjectURL(blob));
//         }
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       }
//     };
//     fetchProfile();
//   }, [token]);

//   // ✅ Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d{0,10}$/.test(value)) return; // only digits, max 10
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Handle image selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const maxSize = 10 * 1024 * 1024; // 10MB
//     if (file.size > maxSize) {
//       setMessage("⚠️ Image size exceeds 10MB limit!");
//       return;
//     }
//     setSelectedFile(file);
//     setImagePreview(URL.createObjectURL(file));
//     setMessage("");
//   };

//   // ✅ Upload profile image
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
//       setMessage("✅ Profile image updated successfully!");
//       setSelectedFile(null);
//     } catch (err) {
//       console.error("Upload error:", err);
//       setMessage("❌ Error uploading image.");
//     }
//   };

//   // ✅ Save updated profile
//   const handleSave = async () => {
//     // simple validation
//     if (!user.firstName.trim() || !user.lastName.trim()) {
//       setMessage("⚠️ Name cannot be empty.");
//       return;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(user.email)) {
//       setMessage("⚠️ Please enter a valid email address.");
//       return;
//     }
//     if (!/^\d{10}$/.test(user.phone)) {
//       setMessage("⚠️ Please enter a valid 10-digit phone number.");
//       return;
//     }

//     try {
//       await axios.put("http://localhost:8080/api/profile/update", user, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMessage("✅ Profile updated successfully!");
//       setIsEditing(false);
//     } catch (err) {
//       console.error("Update error:", err);
//       setMessage("❌ Error updating profile.");
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
//           <div className="profile-btn-group">
//             <input
//               type="file"
//               id="fileInput"
//               hidden
//               accept="image/*"
//               onChange={handleFileChange}
//             />
//             <button
//               className="upload-btn"
//               onClick={() => document.getElementById("fileInput").click()}
//             >
//               Choose Photo
//             </button>
//             {selectedFile && (
//               <button className="upload-btn save" onClick={handleUploadImage}>
//                 Upload
//               </button>
//             )}
//           </div>
//         </div>

//         {/* 👤 User Info */}
//         <div className="profile-info">
//           {!isEditing ? (
//             <>
//               <h2>
//                 {user.firstName} {user.lastName}
//               </h2>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Phone:</strong> {user.phone || "Not set"}</p>
//               <p><strong>Village:</strong> {user.village || "Not set"}</p>
//               <p><strong>Occupation:</strong> {user.occupation || "Not set"}</p>
//               <p><strong>Bio:</strong> {user.bio || "No bio yet"}</p>

//               <button className="edit-btn" onClick={() => setIsEditing(true)}>
//                 ✏️ Edit Profile
//               </button>
//             </>
//           ) : (
//             <div className="edit-form">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={user.firstName || ""}
//                 onChange={handleChange}
//               />

//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={user.lastName || ""}
//                 onChange={handleChange}
//               />

//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={user.email || ""}
//                 onChange={handleChange}
//               />

//               <label>Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={user.phone || ""}
//                 maxLength="10"
//                 placeholder="Enter 10-digit phone number"
//                 onChange={handleChange}
//               />

//               <label>Village</label>
//               <input
//                 type="text"
//                 name="village"
//                 value={user.village || ""}
//                 onChange={handleChange}
//               />

//               <label>Occupation</label>
//               <input
//                 type="text"
//                 name="occupation"
//                 value={user.occupation || ""}
//                 onChange={handleChange}
//               />

//               <label>Bio</label>
//               <textarea
//                 name="bio"
//                 placeholder="Tell us about yourself..."
//                 value={user.bio || ""}
//                 onChange={handleChange}
//               />

//               <div className="edit-btns">
//                 <button className="save-btn" onClick={handleSave}>
//                   💾 Save
//                 </button>
//                 <button
//                   className="cancel-btn"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   ❌ Cancel
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* 📨 Message */}
//         {message && <p className="status-message">{message}</p>}
//       </div>
//     </div>
//   );
// }
// ---------------------------
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
//     occupation: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [message, setMessage] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   // 🔐 Change password state
//   const [passwords, setPasswords] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   // ✅ Fetch user data & image
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);

//         const imgRes = await axios.get("http://localhost:8080/api/profile/image", {
//           headers: { Authorization: `Bearer ${token}` },
//           responseType: "arraybuffer",
//         });

//         if (imgRes.data) {
//           const blob = new Blob([imgRes.data], { type: "image/jpeg" });
//           setImagePreview(URL.createObjectURL(blob));
//         }
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       }
//     };
//     fetchProfile();
//   }, [token]);

//   // ✅ Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone" && !/^\d{0,10}$/.test(value)) return; // allow only 0-10 digits
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Handle password field change
//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswords((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Handle file selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const maxSize = 10 * 1024 * 1024; // 10 MB
//     if (file.size > maxSize) {
//       setMessage("⚠️ Image size exceeds 10MB limit!");
//       return;
//     }
//     setSelectedFile(file);
//     setImagePreview(URL.createObjectURL(file)); // Instant preview
//     setMessage("");
//   };

//   // ✅ Upload image
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
//       setMessage("✅ Profile image uploaded successfully!");
//       setSelectedFile(null);
//     } catch (err) {
//       console.error("Upload error:", err);
//       setMessage("❌ Error uploading image.");
//     }
//   };

//   // ✅ Save profile
//   const handleSave = async () => {
//     if (!user.firstName.trim() || !user.lastName.trim()) {
//       setMessage("⚠️ Name cannot be empty.");
//       return;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(user.email)) {
//       setMessage("⚠️ Please enter a valid email address.");
//       return;
//     }
//     if (!/^\d{10}$/.test(user.phone)) {
//       setMessage("⚠️ Please enter a valid 10-digit phone number.");
//       return;
//     }

//     try {
//       await axios.put("http://localhost:8080/api/profile/update", user, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMessage("✅ Profile updated successfully!");
//       setIsEditing(false);
//     } catch (err) {
//       console.error("Update error:", err);
//       setMessage("❌ Error updating profile.");
//     }
//   };

//   // ✅ Change password
//   const handleChangePassword = async () => {
//     const { currentPassword, newPassword, confirmPassword } = passwords;

//     if (!currentPassword || !newPassword || !confirmPassword) {
//       setMessage("⚠️ Please fill all password fields.");
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setMessage("⚠️ New passwords do not match.");
//       return;
//     }

//     try {
//       const res = await axios.put(
//         "http://localhost:8080/api/profile/change-password",
//         { currentPassword, newPassword },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setMessage(res.data || "✅ Password changed successfully!");
//       setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
//     } catch (err) {
//       console.error("Password change error:", err);
//       setMessage(err.response?.data || "❌ Error changing password.");
//     }
//   };

//   return (
//     <div className="profile-center-container">
//       <div className="profile-card-center">
//         {/* 🖼️ Profile Image */}
//         <div className="profile-img-section">
//           <img src={imagePreview || userImage} alt="Profile" className="profile-page-avatar" />
//           <div className="profile-btn-group">
//             <input type="file" id="fileInput" hidden accept="image/*" onChange={handleFileChange} />
//             <button
//               className="upload-btn"
//               onClick={() => document.getElementById("fileInput").click()}
//             >
//               Choose Photo
//             </button>
//             {selectedFile && (
//               <button className="upload-btn save" onClick={handleUploadImage}>
//                 Upload
//               </button>
//             )}
//           </div>
//         </div>

//         {/* 👤 Profile Info */}
//         <div className="profile-info">
//           {!isEditing ? (
//             <>
//               <h2>
//                 {user.firstName} {user.lastName}
//               </h2>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Phone:</strong> {user.phone || "Not set"}</p>
//               <p><strong>Village:</strong> {user.village || "Not set"}</p>
//               <p><strong>Occupation:</strong> {user.occupation || "Not set"}</p>
//               <p><strong>Bio:</strong> {user.bio || "No bio yet"}</p>

//               <button className="edit-btn" onClick={() => setIsEditing(true)}>
//                 ✏️ Edit Profile
//               </button>
//             </>
//           ) : (
//             <div className="edit-form">
//               <label>First Name</label>
//               <input name="firstName" value={user.firstName} onChange={handleChange} />

//               <label>Last Name</label>
//               <input name="lastName" value={user.lastName} onChange={handleChange} />

//               <label>Email</label>
//               <input name="email" value={user.email} onChange={handleChange} />

//               <label>Phone</label>
//               <input
//                 name="phone"
//                 value={user.phone}
//                 onChange={handleChange}
//                 maxLength="10"
//                 placeholder="Enter 10-digit phone number"
//               />

//               <label>Village</label>
//               <input name="village" value={user.village} onChange={handleChange} />

//               <label>Occupation</label>
//               <input name="occupation" value={user.occupation} onChange={handleChange} />

//               <label>Bio</label>
//               <textarea
//                 name="bio"
//                 placeholder="Tell us about yourself..."
//                 value={user.bio}
//                 onChange={handleChange}
//               />

//               <div className="edit-btns">
//                 <button className="save-btn" onClick={handleSave}>💾 Save</button>
//                 <button className="cancel-btn" onClick={() => setIsEditing(false)}>❌ Cancel</button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* 🔐 Change Password Section */}
//         <div className="password-section">
//           <h3>Change Password</h3>
//           <label>Current Password</label>
//           <input
//             type="password"
//             name="currentPassword"
//             value={passwords.currentPassword}
//             onChange={handlePasswordChange}
//           />

//           <label>New Password</label>
//           <input
//             type="password"
//             name="newPassword"
//             value={passwords.newPassword}
//             onChange={handlePasswordChange}
//           />

//           <label>Confirm New Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={passwords.confirmPassword}
//             onChange={handlePasswordChange}
//           />

//           <button className="save-btn" onClick={handleChangePassword}>
//             🔒 Update Password
//           </button>
//         </div>

//         {/* 📨 Message */}
//         {message && <p className="status-message">{message}</p>}
//       </div>
//     </div>
//   );
// }
// ----------
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyProfile.css";
import userImage from "../../../assets/avatar.png";
import config from "../../../config";

export default function ProfilePage() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    village: "",
    bio: "",
    occupation: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false); // 👈 toggle for password section

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // ✅ Fetch user data + image
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(config.API_BASE_URL+"/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);

        const imgRes = await axios.get("http://localhost:8080/api/profile/image", {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "arraybuffer",
        });

        if (imgRes.data) {
          const blob = new Blob([imgRes.data], { type: "image/jpeg" });
          setImagePreview(URL.createObjectURL(blob));
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setMessage("⚠️ Image size exceeds 10MB limit!");
      return;
    }
    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
    setMessage("");
  };

  const handleUploadImage = async () => {
    if (!selectedFile) return alert("Please select an image first!");
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      await axios.post(config.API_BASE_URL+"/api/profile/upload-image", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("✅ Profile image uploaded successfully!");
      setSelectedFile(null);
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Error uploading image.");
    }
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:8080/api/profile/update", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("✅ Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      console.error("Update error:", err);
      setMessage("❌ Error updating profile.");
    }
  };

  const handleChangePassword = async () => {
    const { currentPassword, newPassword, confirmPassword } = passwords;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("⚠️ Please fill all password fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("⚠️ New passwords do not match.");
      return;
    }

    try {
      const res = await axios.put(
        "http://localhost:8080/api/profile/change-password",
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data || "✅ Password changed successfully!");
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setShowPasswordSection(false);
    } catch (err) {
      console.error("Password change error:", err);
      setMessage(err.response?.data || "❌ Error changing password.");
    }
  };

  return (
    <div className="profile-center-container">
      <div className="profile-card-center">
        {/* 🖼️ Profile Image */}
        <div className="profile-img-section">
          <img
            src={imagePreview || userImage}
            alt="Profile"
            className="profile-page-avatar"
          />
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

        {/* 👤 Profile Info */}
        <div className="profile-info">
          {!isEditing ? (
            <>
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone || "Not set"}</p>
              <p><strong>Village:</strong> {user.village || "Not set"}</p>
              <p><strong>Occupation:</strong> {user.occupation || "Not set"}</p>
              <p><strong>Bio:</strong> {user.bio || "No bio yet"}</p>

              <div className="profile-buttons">
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  ✏️ Edit Profile
                </button>
                <button
                  className="change-password-btn"
                  onClick={() => setShowPasswordSection((prev) => !prev)}
                >
                  🔐 Change Password
                </button>
              </div>
            </>
          ) : (
            <div className="edit-form">
              <label>First Name</label>
              <input name="firstName" value={user.firstName} onChange={handleChange} />
              <label>Last Name</label>
              <input name="lastName" value={user.lastName} onChange={handleChange} />
              <label>Email</label>
              <input name="email" value={user.email} onChange={handleChange} />
              <label>Phone</label>
              <input
                name="phone"
                value={user.phone}
                onChange={handleChange}
                maxLength="10"
              />
              <label>Village</label>
              <input name="village" value={user.village} onChange={handleChange} />
              <label>Occupation</label>
              <input name="occupation" value={user.occupation} onChange={handleChange} />
              <label>Bio</label>
              <textarea name="bio" value={user.bio} onChange={handleChange} />
              <div className="edit-btns">
                <button className="save-btn" onClick={handleSave}>💾 Save</button>
                <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                  ❌ Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 🔐 Change Password Section (toggles open/close) */}
        {showPasswordSection && (
          <div className="password-section">
            <h3>Change Password</h3>
            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handlePasswordChange}
            />
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
            />
            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handlePasswordChange}
            />
            <button className="save-btn" onClick={handleChangePassword}>
              🔒 Update Password
            </button>
          </div>
        )}

        {message && <p className="status-message">{message}</p>}
      </div>
    </div>
  );
}

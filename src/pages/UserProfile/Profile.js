import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Profile.css";

const BASE_URL = "http://localhost:8080/api"; // backend base URL

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    village: "",
    bio: "",
    profilePic: "https://via.placeholder.com/120x120?text=Photo",
  });
  const [loading, setLoading] = useState(true);

  const fileInputRef = useRef(null);

  // ✅ Fetch user profile on load
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login";
          return;
        }

        const res = await axios.get(`${BASE_URL}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          village: res.data.village || "",
          bio: res.data.bio || "",
          profilePic:
            res.data.profilePic || "https://via.placeholder.com/120x120?text=Photo",
        });
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // ✅ Save changes
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${BASE_URL}/user/update`,
        {
          firstName: profile.firstName,
          lastName: profile.lastName,
          email: profile.email,
          village: profile.village,
          bio: profile.bio,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      showNotification("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      showNotification("Error updating profile!");
    }
  };

  // ✅ Notification helper
  const showNotification = (msg) => {
    const toast = document.createElement("div");
    toast.className = "notification";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  if (loading) {
    return <div className="loading-text">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <header className="main-header">
        <span className="logo">SmartGaon AI</span>
        <nav>
          <a href="#">Home</a>
          <a href="#">My Profile</a>
          <a href="#">Notifications</a>
          <a href="#" onClick={() => localStorage.clear()}>Logout</a>
        </nav>
      </header>

      <div className="profile-box">
        <div className="profile-header">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="profile-img"
            onClick={() => fileInputRef.current.click()}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (ev) =>
                  setProfile({ ...profile, profilePic: ev.target.result });
                reader.readAsDataURL(file);
              }
            }}
          />

          <h2>
            {profile.firstName} {profile.lastName}
          </h2>
        </div>

        <div className="profile-details">
          <label>Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />

          <label>Village</label>
          <input
            type="text"
            value={profile.village}
            onChange={(e) => setProfile({ ...profile, village: e.target.value })}
          />

          <label>Bio</label>
          <textarea
            rows="2"
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          />

          <button onClick={handleSave}>Save Changes</button>
        </div>
      </div>

      {/* <footer className="main-footer">
        © 2025 Smart Gaon — Empowering Rural Lives
      </footer> */}
    </div>
  );
}

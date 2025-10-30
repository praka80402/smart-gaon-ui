
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../../userProfile/Styles/Header.css";
// import logo from "../../../logo.svg";
// import CoinBadge from "../CoinBadge"; // ✅ Import the coin badge

// export default function Header({ setLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setLoggedIn(false);
//     navigate("/");
//   };

//   return (
//     <header className="user-header">
//       {/* Left Section */}
//       <div className="header-left">
//         <img src={logo} alt="SmartGaon Logo" className="header-logo" />
//         <span className="header-title">SmartGaon AI</span>
//       </div>

//       {/* Right Section with Navigation + Coins */}
//       <nav className="header-nav">
//         <button onClick={() => navigate("/user-dashboard")}>Home</button>
//         <button onClick={() => navigate("/profile")}>My Profile</button>
//         <button>Notifications</button>

    
//         <CoinBadge />

//         <button onClick={handleLogout} className="logout-btn">
//           Logout
//         </button>
//       </nav>
//     </header>
//   );
// }
// ------------------------
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../userProfile/Styles/Header.css";
import logo from "../../../logo.svg";
import CoinBadge from "../CoinBadge";
import axios from "axios";
import defaultAvatar from "../../../assets/avatar.png"; // fallback image

export default function Header({ setLoggedIn }) {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(defaultAvatar);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const token = localStorage.getItem("token");

  // ✅ Fetch profile image from backend
  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/profile/image", {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "arraybuffer",
        });

        if (res.data) {
          const blob = new Blob([res.data], { type: "image/jpeg" });
          const imgUrl = URL.createObjectURL(blob);
          setProfileImage(imgUrl);
        }
      } catch (err) {
        console.warn("No profile image found, using default avatar.");
      }
    };

    if (token) fetchProfileImage();
  }, [token]);

  // ✅ Toggle dropdown visibility
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="user-header">
      {/* 🔹 Left Section */}
      <div className="header-left">
        <img src={logo} alt="SmartGaon Logo" className="header-logo" />
        <span className="header-title">SmartGaon AI</span>
      </div>

      {/* 🔹 Right Section */}
      <nav className="header-nav">
        <button onClick={() => navigate("/user-dashboard")}>Home</button>
        {/* <button onClick={() => navigate("/profile")}>My Profile</button> */}
        <button>Notifications</button>

        <CoinBadge />

       
        <div className="profile-section" ref={dropdownRef}>
          <img
            src={profileImage}
            alt="User"
            className="profile-avatar"
            onClick={toggleDropdown}
          />

          {showDropdown && (
            <div className="profile-dropdown">
              <p onClick={() => navigate("/profile")}>My Profile</p>
              {/* <p onClick={() => navigate("/change-password")}>Change Password</p> */}
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

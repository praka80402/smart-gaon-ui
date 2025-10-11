// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../logo.svg";
// import avatar from "../../assets/avatar.png";
// import bellicon from "../../assets/bell-icon.svg";
// import "./UserHeader.css";

// export default function UserHeader() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ name: "" });

//   useEffect(() => {
//     const u = JSON.parse(localStorage.getItem("user"));
//     if (u) setUser(u);
//   }, []);

//   return (
//     <header className="header">
//       {/* Left side */}
//       <div className="left">
//         <img src={logo} alt="Smart Gaon Logo" className="logo" />
//         <h1>Smart Gaon AI</h1>
//       </div>

//       {/* Right side */}
//       <div className="right">
//         <span className="nav-link" onClick={() => navigate("/")}>
//           Home
//         </span>
//         <img
//           src={bellicon}
//           alt="Notifications"
//           className="icon"
//           onClick={() => navigate("/notifications")}
//         />
//         <div
//           className="profile-section"
//           onClick={() => navigate("/profile")}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={avatar} alt="Profile" className="profile-icon" />
//           <span className="user-name">{user?.name || "User"}</span>
//         </div>
//       </div>
//     </header>
//   );
// }

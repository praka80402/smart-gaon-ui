// import React from "react";
// import "../Styles/Header.css";
// import logo from "../../../assets/logo.svg";
// export default function Header({ onLogout }) {
//   return (
//     <header className="header">
//       <div className="logo-section">
//         <img src="/logo" alt="SmartGaon" className="logo" />
//         <h2>SmartGaon Connect</h2>
//       </div>
//       <nav className="nav-links">
//         <a href="/">Home</a>
//         <a href="/profile">My Profile</a>
//         <a href="/">Notifications</a>
//         <button className="logout-btn" onClick={onLogout}>
//           Logout
//         </button>
//       </nav>
//     </header>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../userProfile/Styles/Header.css";
import logo from "../../../logo.svg"; 

export default function Header({ setLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="user-header">
      <div className="header-left">
        <img src={logo} alt="SmartGaon Logo" className="header-logo" />
        <span className="header-title">SmartGaon Connect</span>
      </div>

      <nav className="header-nav">
        <button onClick={() => navigate("/user-dashboard")}>Home</button>
        <button onClick={() => navigate("/profile")}>My Profile</button>
        <button>Notifications</button>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </nav>
    </header>
  );
}

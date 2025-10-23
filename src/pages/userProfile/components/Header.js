
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../../userProfile/Styles/Header.css";
// import logo from "../../../logo.svg"; 

// export default function Header({ setLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setLoggedIn(false);
//     navigate("/");
//   };

//   return (
//     <header className="user-header">
//       <div className="header-left">
//         <img src={logo} alt="SmartGaon Logo" className="header-logo" />
//         <span className="header-title">SmartGaon AI</span>
//       </div>

//       <nav className="header-nav">
//         <button onClick={() => navigate("/user-dashboard")}>Home</button>
//         <button onClick={() => navigate("/profile")}>My Profile</button>
//         <button>Notifications</button>
//         <button onClick={handleLogout} className="logout-btn">Logout</button>
//       </nav>
//     </header>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import "../../userProfile/Styles/Header.css";
import logo from "../../../logo.svg";
import CoinBadge from "../CoinBadge"; // ✅ Import the coin badge

export default function Header({ setLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="user-header">
      {/* Left Section */}
      <div className="header-left">
        <img src={logo} alt="SmartGaon Logo" className="header-logo" />
        <span className="header-title">SmartGaon AI</span>
      </div>

      {/* Right Section with Navigation + Coins */}
      <nav className="header-nav">
        <button onClick={() => navigate("/user-dashboard")}>Home</button>
        <button onClick={() => navigate("/profile")}>My Profile</button>
        <button>Notifications</button>

    
        <CoinBadge />

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>
    </header>
  );
}

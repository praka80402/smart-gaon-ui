import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../logo.svg";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Smart Gaon Logo" className="logo" />
        <h1>Smart Gaon Dashboard</h1>
      </div>
      <FaUserCircle 
        size={30} 
        className="profile-icon" 
        onClick={() => navigate("/login")} 
      />
    </header>
  );
}

export default Header;

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../logo.svg";
import lang from "../../assets/language.svg"

function Header() {
  const navigate = useNavigate();

  const changeLan = () => {

  console.log("Inside click")

  }

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Smart Gaon Logo" className="logo" />
        <h1>SmartGaon AI</h1>
      </div>
      {/* <FaUserCircle 
        size={30} 
        className="profile-icon" 
        onClick={() => navigate("/login")} 
      /> */}

    
      
       <div className="header-right">
         <img onClick={() => changeLan()} src={lang} alt="Language" className="lang" />
        
        {/* ✅ Only Login Button */}
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

    </header>
  );
}

export default Header;

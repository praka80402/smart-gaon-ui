


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import langIcon from "../../assets/language.svg";
import i18n from "../../i18n";
import "./Header.css";

function Header({ setShowLoginModal, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setLoggedIn(false);
    navigate("/"); 
  };

  return (
    <header className="header">
      {/* ✅ Left Section */}
      <div
        className="header-left"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="Smart Gaon Logo" className="logo" />
        <h1>{i18n.t("smartgaon")}</h1>
      </div>

      {/* ✅ Right Section */}
      <div className="header-right">
        {/* Language Switcher */}
        <img
          src={langIcon}
          alt="Language"
          className="lang"
          onClick={toggleDropdown}
        />
        <span className="lang-label">
          {i18n.language === "en"
            ? "English"
            : i18n.language === "hi"
            ? "Hindi"
            : "Marathi"}
        </span>

        {showDropdown && (
          <div className="lang-dropdown">
            {["en", "hi", "mr"].map((lng) => (
              <button key={lng} onClick={() => changeLanguage(lng)}>
                {lng === "en"
                  ? "English"
                  : lng === "hi"
                  ? "Hindi"
                  : "Marathi"}
              </button>
            ))}
          </div>
        )}

       
       {loggedIn ? (
  <button onClick={handleLogout} className="btn  ms-3">
    Logout
  </button>
) : (
  <button
    onClick={() => setShowLoginModal(true)}
    className="btn  ms-3"
  >
    Login
  </button>
        )}
      </div>
    </header>
  );
}

export default Header;

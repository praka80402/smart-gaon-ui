

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../logo.svg";
// import langIcon from "../../assets/language.svg";
// import i18n from "../../i18n";

// function Header() {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setShowDropdown(false);
//   };

//   const getLangLabel = () => {
//     if (i18n.language === "en") return "English";
//     if (i18n.language === "hi") return "Hindi";
//     if (i18n.language === "mr") return "Marathi";
//     return "Language";
//   };

//   // ✅ Check if logged in
//   const isAuthenticated = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <header className="header">
      
//        <div
//         className="header-left"
//         onClick={() => navigate("/")}
//         style={{ cursor: "pointer" }}
//       >
//         <img src={logo} alt="Smart Gaon Logo" className="logo" />
//         <h1>{i18n.t("smartgaon")}</h1>
//       </div>

//       <div className="header-right" style={{ position: "relative" }}>
//         {/* Language Switcher */}
//         <img
//           src={langIcon}
//           alt="Language"
//           className="lang"
//           style={{ cursor: "pointer" }}
//           onClick={toggleDropdown}
//         />
//         <span style={{ marginLeft: "8px" }}>{getLangLabel()}</span>

//         {showDropdown && (
//           <div
//             style={{
//               position: "absolute",
//               top: "78%",
//               right: "130px",

//               background: "#fff",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//               zIndex: 1,
               
//             }}
//           >
//             <button
//               style={{
//                 display: "block",
//                 width: "90%",
//                 //  marginLeft: "8px",
//                 padding: "8px 12px",
//                 background: "none",
                
//                 border: "none",
//                 textAlign: "left",
//                 cursor: "pointer",
//               }}
//               onClick={() => changeLanguage("en")}
//             >
//               English
//             </button>
//             <button
//               style={{
//                 display: "block",
//                 width: "100%",
//                 padding: "8px 16px",
//                 background: "none",
//                 border: "none",
//                 textAlign: "left",
//                 cursor: "pointer",
//               }}
//               onClick={() => changeLanguage("hi")}
//             >
//               Hindi
//             </button>
//             <button
//               style={{
//                 display: "block",
//                 width: "100%",
//                 padding: "8px 16px",
//                 background: "none",
//                 border: "none",
//                 textAlign: "left",
//                 cursor: "pointer",
//               }}
//               onClick={() => changeLanguage("mr")}
//             >
//               Marathi
//             </button>
//           </div>
//         )}

//         {/* ✅ Show Login/Logout depending on state */}
//         {isAuthenticated ? (
//           // <button
//           //   className="logout-btn"
//           //   style={{ marginLeft: "16px" }}
//           //   onClick={handleLogout}
//           // >
//           //   {i18n.t("logout")}
//           // </button>
//            <span
//           className="logout-btn"
//           onClick={() => {
//             localStorage.removeItem("token");
//             window.location.href = "/"; // redirect after logout
//           }}
//         >
//           Logout
//         </span>
//         ) : (
//           <span
//             className="login-btn"
//             // style={{ marginLeft: "16px" }}
//             onClick={() => navigate("/login")}
//           >
//             {i18n.t("login")}
//           </span>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;

// ----------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../logo.svg";
// import langIcon from "../../assets/language.svg";
// import bellIcon from "../../assets/bell-icon.svg";
// import profileIcon from "../../assets/avatar.png";
// import i18n from "../../i18n";
// import "./Header.css";

// function Header() {
//   const navigate = useNavigate();
//   const [showLangDropdown, setShowLangDropdown] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [userName, setUserName] = useState("");
//   const isAuthenticated = localStorage.getItem("token");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.name) setUserName(user.name);
//   }, []);

//   const toggleLangDropdown = () => setShowLangDropdown((prev) => !prev);
//   const toggleProfileDropdown = () => setShowProfileDropdown((prev) => !prev);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setShowLangDropdown(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   const getLangLabel = () => {
//     if (i18n.language === "en") return "English";
//     if (i18n.language === "hi") return "Hindi";
//     if (i18n.language === "mr") return "Marathi";
//     return "Language";
//   };

//   return (
//     <header className="header">
//       {/* Left Section */}
//       <div className="header-left" onClick={() => navigate("/")}>
//         <img src={logo} alt="Smart Gaon Logo" className="logo" />
//         <h1>Smart Gaon AI</h1>
//       </div>

//       {/* Right Section */}
//       <div className="header-right">
//         {/* Language Icon */}
//         <img
//           src={langIcon}
//           alt="Language"
//           className="lang-icon"
//           onClick={toggleLangDropdown}
//         />
//         <span className="lang-label">{getLangLabel()}</span>

//         {/* Language Dropdown */}
//         {showLangDropdown && (
//           <div className="dropdown lang-dropdown">
//             {["en", "hi", "mr"].map((lng) => (
//               <button key={lng} onClick={() => changeLanguage(lng)}>
//                 {lng === "en" ? "English" : lng === "hi" ? "Hindi" : "Marathi"}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* If Logged In */}
//         {isAuthenticated ? (
//           <>
//             <img
//               src={bellIcon}
//               alt="Notifications"
//               className="bell-icon"
//               onClick={() => navigate("/notifications")}
//             />

//             <div className="profile-wrapper" onClick={toggleProfileDropdown}>
//               <img src={profileIcon} alt="Profile" className="profile-icon" />
//               {/* <span className="user-name">{userName }</span> */}

//               {showProfileDropdown && (
//                 <div className="dropdown profile-dropdown">
//                   <button onClick={handleLogout}>Logout</button>
//                 </div>
//               )}
//             </div>
//           </>
//         ) : (
//           <span className="login-btn" onClick={() => navigate("/login")}>
//             Login
//           </span>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;

// -------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../logo.svg";
// import langIcon from "../../assets/language.svg";
// import i18n from "../../i18n";
// import LoginPage from "../login/LoginPage";
// // import LoginPage from "../"; // ✅ Import the modal component
// // import LoginPage from "./pages/login/login";


// function Header() {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

//   const toggleDropdown = () => setShowDropdown((prev) => !prev);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setShowDropdown(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("email");
//     setLoggedIn(false);
//   };

//   return (
//     <>
//       <header className="header">
//         <div
//           className="header-left"
//           onClick={() => navigate("/")}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={logo} alt="Smart Gaon Logo" className="logo" />
//           <h1>{i18n.t("smartgaon")}</h1>
//         </div>

//         <div className="header-right" style={{ position: "relative" }}>
//           {/* Language Switcher */}
//           <img
//             src={langIcon}
//             alt="Language"
//             className="lang"
//             style={{ cursor: "pointer" }}
//             onClick={toggleDropdown}
//           />
//           <span style={{ marginLeft: "8px" }}>
//             {i18n.language === "en"
//               ? "English"
//               : i18n.language === "hi"
//               ? "Hindi"
//               : "Marathi"}
//           </span>

//           {showDropdown && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "78%",
//                 right: "130px",
//                 background: "#fff",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                 zIndex: 1,
//               }}
//             >
//               {["en", "hi", "mr"].map((lng) => (
//                 <button
//                   key={lng}
//                   style={{
//                     display: "block",
//                     width: "100%",
//                     padding: "8px 16px",
//                     background: "none",
//                     border: "none",
//                     textAlign: "left",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => changeLanguage(lng)}
//                 >
//                   {lng === "en"
//                     ? "English"
//                     : lng === "hi"
//                     ? "Hindi"
//                     : "Marathi"}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* ✅ Login / Logout Button */}
//           {loggedIn ? (
//             <span
//               className="logout-btn"
//               onClick={handleLogout}
//               style={{ cursor: "pointer", marginLeft: "16px" }}
//             >
//               Logout
//             </span>
//           ) : (
//             <span
//               className="login-btn"
//               style={{ cursor: "pointer", marginLeft: "16px" }}
//               onClick={() => setShowLoginModal(true)} // ✅ Open popup
//             >
//               Login
//             </span>
//           )}
//         </div>
//       </header>

      
//       <LoginPage
//         showModal={showLoginModal}
//         setShowModal={setShowLoginModal}
//         setLoggedIn={setLoggedIn}
//       />
//     </>
//   );
// }

// export default Header;


// ----------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../logo.svg";
// import langIcon from "../../assets/language.svg";
// import i18n from "../../i18n";
// import "./Header.css"; // optional if you have styles

// function Header({ setShowLoginModal, loggedIn, setLoggedIn }) {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);

//   // 🔁 Toggle language dropdown
//   const toggleDropdown = () => setShowDropdown((prev) => !prev);

//   // 🌐 Change language
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setShowDropdown(false);
//   };

//   // 🚪 Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("email");
//     setLoggedIn(false);
//     navigate("/"); // return to home after logout
//   };

//   return (
//     <>
//       <header className="header">
//         {/* ✅ Left: Logo + Title */}
//         <div
//           className="header-left"
//           onClick={() => navigate("/")}
//           style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
//         >
//           <img src={logo} alt="Smart Gaon Logo" className="logo" />
//           <h1 style={{ marginLeft: "10px" }}>{i18n.t("smartgaon")}</h1>
//         </div>

//         {/* ✅ Right: Language + Login/Logout */}
//         <div className="header-right" style={{ position: "relative", display: "flex", alignItems: "center" }}>
//           {/* 🌐 Language Switcher */}
//           <img
//             src={langIcon}
//             alt="Language"
//             className="lang"
//             style={{ cursor: "pointer", width: "24px", marginRight: "6px" }}
//             onClick={toggleDropdown}
//           />
//           <span style={{ marginRight: "10px", userSelect: "none" }}>
//             {i18n.language === "en"
//               ? "English"
//               : i18n.language === "hi"
//               ? "Hindi"
//               : "Marathi"}
//           </span>

//           {/* 🌍 Dropdown menu */}
//           {showDropdown && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: "120%",
//                 right: "100px",
//                 background: "#fff",
//                 border: "1px solid #ccc",
//                 borderRadius: "6px",
//                 boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
//                 zIndex: 10,
//               }}
//             >
//               {["en", "hi", "mr"].map((lng) => (
//                 <button
//                   key={lng}
//                   style={{
//                     display: "block",
//                     width: "100%",
//                     padding: "8px 16px",
//                     background: "none",
//                     border: "none",
//                     textAlign: "left",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => changeLanguage(lng)}
//                 >
//                   {lng === "en"
//                     ? "English"
//                     : lng === "hi"
//                     ? "Hindi"
//                     : "Marathi"}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* 👤 Login / Logout Button */}
//           {loggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="btn btn-outline-danger ms-3"
//               style={{
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 borderRadius: "8px",
//                 padding: "6px 14px",
//               }}
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={() => setShowLoginModal(true)} // ✅ Opens login popup
//               className="btn btn-success ms-3"
//               style={{
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 borderRadius: "8px",
//                 padding: "6px 14px",
//               }}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;


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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// //import { useTranslation } from 'react-i18next';
// import logo from "../../logo.svg";
// import langIcon from "../../assets/language.svg";
// import i18n from '../../i18n'

// function Header() {
//   const navigate = useNavigate();
//  // const { i18n } = useTranslation();
//   const [showDropdown, setShowDropdown] = useState(false);

//   // toggle dropdown visibility
//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   // change language
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setShowDropdown(false); // close dropdown after selection
//   };

//   // get current language label
//   const getLangLabel = () => {
//     if (i18n.language === 'en') return 'English';
//     if (i18n.language === 'hi') return 'Hindi';
//     if (i18n.language === 'mr') return 'Marathi';
//     return 'Language';
//   };

//   return (
//     <header className="header">
//       <div className="header-left">
//         <img src={logo} alt="Smart Gaon Logo" className="logo" />
//         <h1>  {i18n.t('smartgaon')}</h1>
//       </div>

//       <div className="header-right" style={{ position: 'relative' }}>
//         {/* Language Icon */}
//         <img
//           src={langIcon}
//           alt="Language"
//           className="lang"
//           style={{ cursor: 'pointer' }}
//           onClick={toggleDropdown}
//         />

//         {/* Show current language label */}
//         <span style={{ marginLeft: '8px' }}>{getLangLabel()}</span>

//         {/* Dropdown menu */}
//         {showDropdown && (
//           <div
//             style={{
//              position: 'absolute',
//              top: '78%',
//               right: '130px',
//               background: '#fff',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//               zIndex: 1,
//             }}
//           >
//             <button
//               style={{
//                 display: 'block',
//                 width: '100%',
//                 padding: '8px 16px',
//                 background: 'none',
//                 border: 'none',
//                 textAlign: 'left',
//                 cursor: 'pointer',
//               }}
//               onClick={() => changeLanguage('en')}
//             >
//               English
//             </button>
//             <button
//               style={{
//                 display: 'block',
//                 width: '100%',
//                 padding: '8px 16px',
//                 background: 'none',
//                 border: 'none',
//                 textAlign: 'left',
//                 cursor: 'pointer',
//               }}
//               onClick={() => changeLanguage('hi')}
//             >
//               Hindi
//             </button>
//             <button
//               style={{
//                 display: 'block',
//                 width: '100%',
//                 padding: '8px 16px',
//                 background: 'none',
//                 border: 'none',
//                 textAlign: 'left',
//                 cursor: 'pointer',
//               }}
//               onClick={() => changeLanguage('mr')}
//             >
//               Marathi
//             </button>
//           </div>
//         )}

//         {/* Login Button */}
//         <button
//           className="login-btn"
//           style={{ marginLeft: '16px' }}
//           onClick={() => navigate("/login")}
//         >
//           {i18n.t('login')}
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import langIcon from "../../assets/language.svg";
import i18n from "../../i18n";

function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };

  const getLangLabel = () => {
    if (i18n.language === "en") return "English";
    if (i18n.language === "hi") return "Hindi";
    if (i18n.language === "mr") return "Marathi";
    return "Language";
  };

  // ✅ Check if logged in
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      
       <div
        className="header-left"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="Smart Gaon Logo" className="logo" />
        <h1>{i18n.t("smartgaon")}</h1>
      </div>

      <div className="header-right" style={{ position: "relative" }}>
        {/* Language Switcher */}
        <img
          src={langIcon}
          alt="Language"
          className="lang"
          style={{ cursor: "pointer" }}
          onClick={toggleDropdown}
        />
        <span style={{ marginLeft: "8px" }}>{getLangLabel()}</span>

        {showDropdown && (
          <div
            style={{
              position: "absolute",
              top: "78%",
              right: "130px",

              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              zIndex: 1,
               
            }}
          >
            <button
              style={{
                display: "block",
                width: "90%",
                //  marginLeft: "8px",
                padding: "8px 12px",
                background: "none",
                
                border: "none",
                textAlign: "left",
                cursor: "pointer",
              }}
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              style={{
                display: "block",
                width: "100%",
                padding: "8px 16px",
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
              }}
              onClick={() => changeLanguage("hi")}
            >
              Hindi
            </button>
            <button
              style={{
                display: "block",
                width: "100%",
                padding: "8px 16px",
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
              }}
              onClick={() => changeLanguage("mr")}
            >
              Marathi
            </button>
          </div>
        )}

        {/* ✅ Show Login/Logout depending on state */}
        {isAuthenticated ? (
          // <button
          //   className="logout-btn"
          //   style={{ marginLeft: "16px" }}
          //   onClick={handleLogout}
          // >
          //   {i18n.t("logout")}
          // </button>
           <span
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/"; // redirect after logout
          }}
        >
          Logout
        </span>
        ) : (
          <span
            className="login-btn"
            // style={{ marginLeft: "16px" }}
            onClick={() => navigate("/login")}
          >
            {i18n.t("login")}
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;

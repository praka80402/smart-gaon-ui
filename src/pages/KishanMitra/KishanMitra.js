// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./KishanMitra.css";

// export default function KisanMitraHome() {
//   const navigate = useNavigate();

//   const features = [
//     {
//       icon: "🌾",
//       title: "Crop Monitoring",
//       desc: "Upload crop photos and get health or pest analysis tips.",
//       path: "/kisan-mitra/crop-monitoring",
//     },
//     {
//       icon: "🧪",
//       title: "Soil & Crop Testing",
//       desc: "Submit samples and view test results for better yield.",
//       path: "/kisan-mitra/soil-testing",
//     },
//     {
//       icon: "📷",
//       title: "Quality Testing",
//       desc: "Upload produce photos to get AI-based grading advice.",
//       path: "/kisan-mitra/quality-testing",
//     },
//     {
//       icon: "🌱",
//       title: "Organic Farming",
//       desc: "Learn organic farming practices and save steps locally.",
//       path: "/kisan-mitra/organic-farming",
//     },
//     {
//       icon: "🤝",
//       title: "Contract Farming",
//       desc: "Explore contract opportunities and connect with buyers.",
//       path: "/kisan-mitra/contract-farming",
//     },
//     {
//       icon: "🎓",
//       title: "Farmer Training",
//       desc: "Watch tutorials and access training topics for new techniques.",
//       path: "/kisan-mitra/farmer-training",
//     },
//     {
//       icon: "💬",
//       title: "Ask Question (AI)",
//       desc: "Speak or type your query — get instant AI assistance.",
//       path: "/kisan-mitra/ask-question",
//     },
//     {
//       icon: "📥",
//       title: "Download Offline Tools",
//       desc: "Access and download resources for offline use.",
//       path: "/kisan-mitra/offline-tools",
//     },
//   ];

//   return (
     

//     <div className="kisan-home">
//          <header className="gd-header">
//         <div className="gd-header-content">
//           <div className="gd-header-left">
//             {/* <img src={logo} alt="Smart Gaon Logo" className="gd-logo" /> */}
//              <h2>Kisan Mitra</h2>
//           </div>
//         </div>
//       </header>
//       <h1 className="kisan-title">🚜 Check Your Product</h1>
//       <p className="kisan-subtitle">
//         Empowering farmers with smart tools, AI insights, and digital training to boost productivity and sustainability.
//       </p>

//       <div className="kisan-grid">
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="kisan-card"
//             onClick={() => navigate(item.path)}
//           >
//             <div className="kisan-icon">{item.icon}</div>
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// ----------------------------

import React, { useState } from "react";
import "./KishanMitra.css";
import CropMonitor from "./Components/CropMonitoring"; // ✅ add this
import OrganicFarming from "./Components/OrganicFarming";

export default function KisanMitraHome() {

  const [activePage, setActivePage] = useState(null); // ✅ track which tool is opened

  const features = [
    {
      icon: "🌾",
      title: "Crop Monitoring",
      desc: "Upload crop photos and get health or pest analysis tips.",
      action: () => setActivePage("crop"),
    },
    {
      icon: "🧪",
      title: "Soil & Crop Testing",
      desc: "Submit samples and view test results for better yield.",
      action: () => alert("Soil Testing Coming Soon!"),
    },
    {
      icon: "📷",
      title: "Quality Testing",
      desc: "Upload produce photos to get AI-based grading advice.",
      action: () => alert("Quality Testing Coming Soon!"),
    },
    {
      icon: "🌱",
      title: "Organic Farming",
      desc: "Learn organic farming practices and save steps locally.",
      action: () => setActivePage("organic"),
    },
    {
      icon: "🤝",
      title: "Contract Farming",
      desc: "Explore contract opportunities and connect with buyers.",
      action: () => alert("Contract Farming Coming Soon!"),
    },
    {
      icon: "🎓",
      title: "Farmer Training",
      desc: "Watch tutorials and access training topics for new techniques.",
      action: () => alert("Training Coming Soon!"),
    },
    {
      icon: "💬",
      title: "Ask Question (AI)",
      desc: "Speak or type your query — get instant AI assistance.",
      action: () => alert("AI Assistant Coming Soon!"),
    },
    {
      icon: "📥",
      title: "Download Offline Tools",
      desc: "Access and download resources for offline use.",
      action: () => alert("Offline Tools Coming Soon!"),
    },
  ];

  // ✅ If Crop Monitoring selected → Show CropMonitor Component
  if (activePage === "crop") {
     return <CropMonitor goBack={() => setActivePage(null)} />;
  }
   if (activePage === "organic") {
  return <OrganicFarming goBack={() => setActivePage(null)} />;
}
  return (
    <div className="kisan-home">
      <header className="gd-header">
        <div className="gd-header-content">
          <div className="gd-header-left">
            <h2>Kisan Mitra</h2>
          </div>
        </div>
      </header>

      <h1 className="kisan-title">🚜 Check Your Product</h1>
      <p className="kisan-subtitle">
        Empowering farmers with smart tools, AI insights, and digital training to boost productivity and sustainability.
      </p>

      <div className="kisan-grid">
        {features.map((item, index) => (
          <div
            key={index}
            className="kisan-card"
            onClick={item.action}
          >
            <div className="kisan-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


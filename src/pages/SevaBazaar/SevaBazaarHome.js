// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./SevaBazaar.css";
// // import ProviderList from "./ProviderList";
// // import CreateRequest from "./CreateRequest";

// // export default function SevaBazaarHome() {
// //   return (
// //     <div className="sewa-container">
// //       <h1 className="title">🌾 Sewa Bazaar</h1>
// //       <p className="subtitle">
// //         Connecting villagers with trusted service providers for daily and agricultural needs.
// //       </p>

// //       <div className="sewa-links">
// //         <Link to="/sewa-bazaar/providers" className="sewa-card">🔍 Find Providers</Link>
// //         <Link to="/sewa-bazaar/request" className="sewa-card">🛠️ Post Work Request</Link>
// //         <Link to="/sewa-bazaar/history" className="sewa-card">📜 Job History</Link>
// //         <Link to="/sewa-bazaar/chat" className="sewa-card">💬 Chat</Link>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import "./SevaBazaar.css";
// import ProviderList from "./ProviderList";
// import CreateRequest from "./CreateRequest";
// import JobHistory from "./JobHistory";
// import ChatBox from "./ChatBox";

// export default function SevaBazaarHome() {
//   const [activeSection, setActiveSection] = useState("home");

//   const renderSection = () => {
//     switch (activeSection) {
//       case "providers":
//         return <ProviderList />;
//       case "request":
//         return <CreateRequest />;
//       case "history":
//         return <JobHistory />;
//       case "chat":
//         return <ChatBox />;
//       default:
//         return (
//           <div className="home-intro">
//             <h1 className="title">🌾 Sewa Bazaar</h1>
//             <p className="subtitle">
//               Connecting villagers with trusted service providers for daily and agricultural needs.
//             </p>
//         </div>
//         );
//     }
//   };

//   return (
//     <div className="sewa-container">
//       {/* 🟩 Navigation Buttons */}
//       <div className="sewa-links">
//         <button
//           className={activeSection === "history" ? "active" : ""}
//           onClick={() => setActiveSection("/")}
//         >
//           📜 Home
//         </button>

//         <button
//           className={activeSection === "providers" ? "active" : ""}
//           onClick={() => setActiveSection("providers")}
//         >
//           🔍 Find Providers
//         </button>

//         <button
//           className={activeSection === "request" ? "active" : ""}
//           onClick={() => setActiveSection("request")}
//         >
//           🛠️ Post Work Request
//         </button>
//         <button
//           className={activeSection === "history" ? "active" : ""}
//           onClick={() => setActiveSection("history")}
//         >
//           📜 Job History
//         </button>
//         <button
//           className={activeSection === "chat" ? "active" : ""}
//           onClick={() => setActiveSection("chat")}
//         >
//           💬 Chat
//         </button>
//       </div>

//       {/* 🟨 Dynamic Section Display */}
//       <div className="sewa-section">{renderSection()}</div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./SevaBazaar.css";
import ProviderList from "./ProviderList";
import CreateRequest from "./CreateRequest";
import JobHistory from "./JobHistory";
import ChatBox from "./ChatBox";

export default function SevaBazaarDashboard() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "providers":
        return <ProviderList />;
      case "request":
        return <CreateRequest />;
      case "history":
        return <JobHistory />;
      case "chat":
        return <ChatBox />;
      default:
        return (
          <div className="sewa-intro">
            <h2>Welcome to Seva Bazaar 🌾</h2>
            <p>
              Connecting villagers with trusted service providers for daily and
              agricultural needs.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="sewa-dashboard">
      
     

      {/* ✅ Header Info */}
      <div className="sewa-header">
        <h1 className="sewa-title">Sewa Bazaar - Smart Services</h1>
        {/* <p className="sewa-subtitle">
          Empowering rural communities through digital access to local services.
        </p> */}
      </div>

      {/* ✅ Navigation Tabs */}
      <div className="sewa-tabs">
        <button
          className={activeTab === "home" ? "active" : ""}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button
          className={activeTab === "providers" ? "active" : ""}
          onClick={() => setActiveTab("providers")}
        >
          Providers
        </button>
        <button
          className={activeTab === "request" ? "active" : ""}
          onClick={() => setActiveTab("request")}
        >
          Post Request
        </button>
        <button
          className={activeTab === "history" ? "active" : ""}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
        <button
          className={activeTab === "chat" ? "active" : ""}
          onClick={() => setActiveTab("chat")}
        >
          Chat
        </button>
      </div>

      {/* ✅ Dynamic Section */}
      <div className="sewa-section">{renderContent()}</div>
    </div>
  );
}

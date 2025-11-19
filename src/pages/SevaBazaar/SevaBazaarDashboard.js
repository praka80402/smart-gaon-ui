
// import React, { useState } from "react";
// import "./SevaBazaar.css";
// import SevaBazaarHome from "./SevaBazaarHome";
// import ProviderList from "./ProviderList";
// import CreateRequest from "./CreateRequest";
// import JobHistory from "./JobHistory";
// import ChatBox from "./ChatBox";

// export default function SevaBazaarDashboard() {
//   const [activeTab, setActiveTab] = useState("home");

//   const renderSection = () => {
//     switch (activeTab) {
//       case "providers":
//         return <ProviderList />;
//       case "request":
//         return <CreateRequest />;
//       case "history":
//         return <JobHistory />;
//       case "chat":
//         return <ChatBox />;
//       default:
//         return <SevaBazaarHome />;
//     }
//   };

//   return (
//     <div className="sewa-dashboard">
//       {/* ✅ Navbar */}
//       <nav className="sewa-nav">
//         <button
//           className={activeTab === "home" ? "active" : ""}
//           onClick={() => setActiveTab("home")}
//         >
//           🏠 Home
//         </button>
//         <button
//           className={activeTab === "providers" ? "active" : ""}
//           onClick={() => setActiveTab("providers")}
//         >
//           🔍 Providers
//         </button>
//         <button
//           className={activeTab === "request" ? "active" : ""}
//           onClick={() => setActiveTab("request")}
//         >
//           🛠️ Post Request
//         </button>
//         <button
//           className={activeTab === "history" ? "active" : ""}
//           onClick={() => setActiveTab("history")}
//         >
//           📜 History
//         </button>
//         <button
//           className={activeTab === "chat" ? "active" : ""}
//           onClick={() => setActiveTab("chat")}
//         >
//           💬 Chat
//         </button>
//       </nav>

//       {/* ✅ Main Content */}
//       <div className="sewa-content">{renderSection()}</div>
//     </div>
//   );
// }

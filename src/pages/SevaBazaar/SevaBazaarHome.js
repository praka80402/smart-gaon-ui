

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
            <h1>Welcome to Seva Bazaar 🌾</h1>
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
        <h1 className="sewa-title"> Sewa Bazaar - Smart Services</h1>
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
       
      </div>

      {/* ✅ Dynamic Section */}
      <div className="sewa-section">{renderContent()}</div>
    </div>
  );
}

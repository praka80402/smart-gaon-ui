import React, { useState } from "react";
import "./GaonConnect.css";
// import logo from "../../../assets/logo-1.png";
import Forum from "./Components/Forum";
import News from "./Components/News";
import ReportProblem from "./Components/ReportProblem";
import JobBoard from "./Components/JobBoard";
import Directory from "./Components/Directory";
import Suggestion from "./Components/Suggestion";
import GaonTalent from "./Components/GaonTalent";

export default function GaonConnect() {
  const [activeSection, setActiveSection] = useState("Forum");

  const renderSection = () => {
    switch (activeSection) {
      case "Forum":
        return <Forum />;
      case "News":
        return <News />;
      case "Report":
        return <ReportProblem />;
      case "Jobs":
        return <JobBoard />;
      case "Directory":
        return <Directory />;
      case "Suggestions":
        return <Suggestion />;
      case "Talent":
        return <GaonTalent />;
      default:
        return <Forum />;
    }
  };

  return (
    <div className="gaonconnect-container">
      {/* Header */}
      <header className="gaonconnect-header">
        <div className="gaonconnect-left">
          {/* <img src={logo} alt="SmartGaon Logo" className="gaonconnect-logo" /> */}
          <h2>My Village</h2>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="gaonconnect-nav">
        {[
          "Forum",
          "News",
          "Report",
          "Jobs",
          "Directory",
          "Suggestions",
          "Talent",
        ].map((item) => (
          <button
            key={item}
            className={activeSection === item ? "active" : ""}
            onClick={() => setActiveSection(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Dynamic Content */}
      <main className="gaonconnect-content">{renderSection()}</main>
    </div>
  );
}

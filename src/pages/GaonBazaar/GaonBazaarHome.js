import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./GaonBazaar.css";
import SearchProducts from "./SearchProducts";
import CreateListing from "./CreateListing";
import MyListings from "./MyListings";
import OfflineCatalog from "./OfflineCatalog";
import ViewListing from "./ViewListing";

export default function GaonBazaarHome() {

 const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "search":
        return <SearchProducts />;
      case "view":
        return <ViewListing/>;
      case "create":
        return <CreateListing />;
      case "my-listings":
        return <MyListings />;
      case "offline":
        return <OfflineCatalog />;
      default:
        return (
          <div className="gaon-intro">
            <h2>🛒 Welcome to Gaon Bazaar</h2>
            <p>
              Buy, sell, and exchange goods within your local community to support
              rural businesses and farmers.
            </p>

            <div className="gaon-home-buttons">
              <button onClick={() => setActiveTab("search")}>🔍 Search Products</button>
              <button onClick={() => setActiveTab("create")}>➕ Create Listing</button>
              <button onClick={() => setActiveTab("my-listings")}>📋 My Listings</button>
              <button onClick={() => setActiveTab("offline")}>📥 Offline Catalog</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="gaon-dashboard">
      {/* ✅ Header */}
      <div className="gaon-header">
        <h1 className="gaon-title">Gaon Bazaar - Local Marketplace</h1>
        {/* <p className="gaon-subtitle">
          Empowering villages through digital access to trade and collaboration.
        </p> */}
      </div>

      {/* ✅ Navigation Tabs */}
      <div className="gaon-tabs">
        <button
          className={activeTab === "home" ? "active" : ""}
          onClick={() => setActiveTab("home")}
        >
          🏠 Home
        </button>
        <button
          className={activeTab === "search" ? "active" : ""}
          onClick={() => setActiveTab("search")}
        >
          🔍 Search
        </button>
        <button
          className={activeTab === "create" ? "active" : ""}
          onClick={() => setActiveTab("create")}
        >
          ➕ Create Listing
        </button>
        <button
          className={activeTab === "my-listings" ? "active" : ""}
          onClick={() => setActiveTab("my-listings")}
        >
          📋 My Listings
        </button>
        <button
          className={activeTab === "offline" ? "active" : ""}
          onClick={() => setActiveTab("offline")}
        >
          📥 Offline
        </button>
      </div>

      {/* ✅ Dynamic Section */}
      <div className="gaon-section">{renderContent()}</div>
    </div>
  );
}
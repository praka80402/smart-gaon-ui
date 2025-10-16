import React from "react";
import SearchByVoice from "./components/SearchByVoice";
import SearchByImage from "./components/SearchByImage";
import SearchByText from "./components/SearchByText";
import "./GaonBazaar.css";

export default function SearchProducts() {
  return (
    <div className="gaon-section">
      <h2>🔍 Search Products</h2>
      <p>Find local items using voice, image, or text search.</p>

      <div className="search-options">
        <SearchByVoice />
        <SearchByImage />
        <SearchByText />
      </div>
    </div>
  );
}

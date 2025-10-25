import React, { useState } from "react";
import "./Component.css";

export default function OrganicFarming({ goBack }) {

  const [season, setSeason] = useState("");
  const [crop, setCrop] = useState("");
  const [method, setMethod] = useState("");

  const seasonCrops = {
    Rabi: ["Wheat", "Barley", "Mustard", "Pea", "Gram", "Lentil"],
    Kharif: ["Rice", "Maize", "Bajra", "Sorghum", "Cotton", "Groundnut", "Soybean"],
    Jayad: ["Vegetables", "Watermelon", "Cucumber", "Pumpkin", "Melon", "Sunflower"],
  };

  const cropMethods = {
    Wheat: "Use farmyard manure and compost. Rotate with pulses. Spray neem oil for pests.",
    Rice: "Use azolla, fish for pest control & maintain water level.",
    Bajra: "Apply compost + intercrop with legumes.",
    Vegetables: "Mulching + drip + organic compost + chili-garlic spray.",
    Mustard: "Use compost & neem cake. Rotate with chickpea.",
    Gram: "Apply vermicompost & seed treat with Trichoderma.",
  };

  return (
    <div className="organic-page">

      {/* ✅ Header (Back Navigation) */}
      <div className="organic-header" onClick={goBack}>
        ← Organic Farming Advisor
      </div>

      {/* ✅ Crop Selection Form */}
      <div className="organic-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMethod(cropMethods[crop] || "Please select a crop.");
          }}
        >
          <div className="organic-form-row">
            <select
              className="organic-select"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              required
            >
              <option value="">Select Season</option>
              {Object.keys(seasonCrops).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <select
              className="organic-select"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              required
            >
              <option value="">Select Crop</option>
              {season && seasonCrops[season].map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <button className="organic-submit-btn" type="submit">Get Organic Method</button>
        </form>

        {method && (
          <div className="organic-method-box">
            <b>Recommended Organic Method:</b><br />{method}
          </div>
        )}
      </div>

    </div>
  );
}

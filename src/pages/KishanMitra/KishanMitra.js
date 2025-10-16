import React from "react";
import { useNavigate } from "react-router-dom";
import "./KishanMitra.css";

export default function KisanMitraHome() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🌾",
      title: "Crop Monitoring",
      desc: "Upload crop photos and get health or pest analysis tips.",
      path: "/kisan-mitra/crop-monitoring",
    },
    {
      icon: "🧪",
      title: "Soil & Crop Testing",
      desc: "Submit samples and view test results for better yield.",
      path: "/kisan-mitra/soil-testing",
    },
    {
      icon: "📷",
      title: "Quality Testing",
      desc: "Upload produce photos to get AI-based grading advice.",
      path: "/kisan-mitra/quality-testing",
    },
    {
      icon: "🌱",
      title: "Organic Farming",
      desc: "Learn organic farming practices and save steps locally.",
      path: "/kisan-mitra/organic-farming",
    },
    {
      icon: "🤝",
      title: "Contract Farming",
      desc: "Explore contract opportunities and connect with buyers.",
      path: "/kisan-mitra/contract-farming",
    },
    {
      icon: "🎓",
      title: "Farmer Training",
      desc: "Watch tutorials and access training topics for new techniques.",
      path: "/kisan-mitra/farmer-training",
    },
    {
      icon: "💬",
      title: "Ask Question (AI)",
      desc: "Speak or type your query — get instant AI assistance.",
      path: "/kisan-mitra/ask-question",
    },
    {
      icon: "📥",
      title: "Download Offline Tools",
      desc: "Access and download resources for offline use.",
      path: "/kisan-mitra/offline-tools",
    },
  ];

  return (
    <div className="kisan-home">
      <h1 className="kisan-title">🚜 Kisan Mitra</h1>
      <p className="kisan-subtitle">
        Empowering farmers with smart tools, AI insights, and digital training to boost productivity and sustainability.
      </p>

      <div className="kisan-grid">
        {features.map((item, index) => (
          <div
            key={index}
            className="kisan-card"
            onClick={() => navigate(item.path)}
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

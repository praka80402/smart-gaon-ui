// src/components/CoinBadge.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Styles/CoinBadge.css";
import coinIcon from "../../assets/Coin.png";  // 🪙 use your coin image

export default function CoinBadge() {
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem("coins") || "0"));
  const location = useLocation();

  // ✅ Define which routes are service pages
  const serviceRoutes = [
    "/donation",
    "/sarkari-seva",
    "/shiksha-sahayak",
    "/gram-doctor",
    "/kishan-mitra",
    "/gaon-bazar",
    "/seva-bazar",
    "/weather-report",
  ];

  useEffect(() => {
    // ✅ Only reward coins for specific service pages
    if (serviceRoutes.includes(location.pathname)) {
      const add = Math.floor(Math.random() * 6) + 5; // +5–10 coins
      const newTotal = coins + add;
      setCoins(newTotal);
      localStorage.setItem("coins", newTotal);
    }
  }, [location.pathname]); // runs when route changes

  return (
    <div className="coin-badge-inline">
      <img src={coinIcon} alt="coin" className="coin-icon" />
      <span className="coin-count">{coins}</span>
    </div>
  );
}
import React from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function ProviderCard({ provider }) {
  return (
    <div className="provider-card">
      <h3>{provider.name}</h3>
      <p>{provider.service}</p>
      <p>📍 {provider.location}</p>
      {provider.certified && (
        <p className="badge">✅ {provider.certified}</p>
      )}
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < provider.rating ? "#FFD700" : "#ccc"} />
        ))}
      </div>
      <a
        href={`https://wa.me/${provider.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp /> Chat
      </a>
    </div>
  );
}

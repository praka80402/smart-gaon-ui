import React, { useState } from "react";
import ProviderCard from "./ProviderCard";
import "./SevaBazaar.css";

const sampleProviders = [
  { id: 1, name: "Ramesh Kumar", service: "Plumber", phone: "9876543210", rating: 4, location: "Muzaffarpur", certified: "NSDC Certified" },
  { id: 2, name: "Sita Devi", service: "Tailor", phone: "9998887770", rating: 5, location: "Patna" },
];

export default function ProviderList() {
  const [search, setSearch] = useState("");

  const filtered = sampleProviders.filter((p) =>
    p.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sewa-container">
      <h2 className="section-title">Find Local Service Providers</h2>
      <input
        className="search-bar"
        type="text"
        placeholder="Search plumber, carpenter, etc..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="card-grid">
        {filtered.length ? (
          filtered.map((p) => <ProviderCard key={p.id} provider={p} />)
        ) : (
          <p className="no-data">No providers found</p>
        )}
      </div>
    </div>
  );
}

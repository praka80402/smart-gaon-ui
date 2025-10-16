import React from "react";

export default function MyListings() {
  return (
    <div className="gaon-section">
      <h2>📋 My Listings</h2>
      <p>Here you can edit or delete your existing listings.</p>

      <div className="listings">
        <div className="listing-card">
          <h4>🚜 Tractor for Rent</h4>
          <p>Price: ₹1200/day</p>
          <div className="actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

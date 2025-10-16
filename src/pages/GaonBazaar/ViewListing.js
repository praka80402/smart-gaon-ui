import React from "react";
import { useParams } from "react-router-dom";
import ContactSeller from "./components/ContactSeller";

export default function ViewListing() {
  const { listingId } = useParams();

  return (
    <div className="gaon-section">
      <h2>📦 View Listing</h2>
      <p>Listing ID: {listingId}</p>
      <p>Product details will appear here.</p>

      <ContactSeller />
    </div>
  );
}

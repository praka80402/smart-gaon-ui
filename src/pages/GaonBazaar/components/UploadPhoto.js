import React from "react";

export default function UploadPhoto() {
  return (
    <div className="sub-card">
      <h4>📷 Upload Photo</h4>
      <input type="file" accept="image/*" />
    </div>
  );
}

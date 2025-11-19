// import React from "react";
// import UploadPhoto from "./components/UploadPhoto";
// import SpeakDetails from "./components/SpeakDetails";
// import SetPrice from "./components/SetPrice";

// export default function CreateListing() {
//   return (
//     <div className="gaon-section">
//       <h2>➕ Create New Listing</h2>
//       <UploadPhoto />
//       <SpeakDetails />
//       <SetPrice />
//       <button className="submit-btn">Submit Listing</button>
//     </div>
//   );
// }
import React from "react";
import UploadPhoto from "./components/UploadPhoto";
import SpeakDetails from "./components/SpeakDetails";
import SetPrice from "./components/SetPrice";

export default function CreateListing() {
  return (
    <div className="create-listing-wrapper">
      <h2 className="create-title">➕ Create New Listing</h2>

      <div className="create-card-container">
        <UploadPhoto />
        <SpeakDetails />
        <SetPrice />
      </div>

      <button className="create-submit-btn">Submit Listing</button>
    </div>
  );
}

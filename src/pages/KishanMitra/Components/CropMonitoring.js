// import React, { useState } from "react";
// import "./Component.css";

// export default function CropMonitor() {
//   const [preview, setPreview] = useState(null);
//   const [response, setResponse] = useState("");

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // TODO: Replace with backend call later
//     setResponse(`
//       <b>AI Crop Health & Pest Analysis:</b><br>
//       <ul>
//         <li>The leaves appear healthy, deep green with minor yellow spots. Monitor for possible nitrogen deficiency.</li>
//         <li>No visible signs of pest infestation detected. Continue regular monitoring.</li>
//         <li><b>Tip:</b> Ensure proper irrigation and avoid water stagnation to reduce risk of fungal disease.</li>
//         <li>If brown patches increase, consider consulting local agricultural expert for fertilizer adjustment.</li>
//       </ul>
//     `);
//   };

//   return (
//     <>
//       <div className="header">Crop Monitoring - AI Crop Health & Pest Tips</div>

//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <label>Upload a picture of your crop:</label>

//           <div
//             className="file-upload"
//             onClick={() => document.getElementById("cropImage").click()}
//           >
//             <span>Click here or drag an image to upload</span>
//             <input
//               type="file"
//               id="cropImage"
//               accept="image/*"
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//               required
//             />
//           </div>

//           {preview && <img src={preview} alt="Crop Preview" className="preview-img" />}

//           <button className="submit-btn" type="submit">Get AI Analysis</button>
//         </form>

//         {response && (
//           <div
//             className="response-box"
//             dangerouslySetInnerHTML={{ __html: response }}
//           />
//         )}
//       </div>

//       <div className="tips-section">
//         <h2>Farming Tips for Healthy Crops</h2>
//         <ul>
//           <li>Rotate crops regularly to improve soil health and reduce pest buildup.</li>
//           <li>Ensure irrigation is uniform and avoid waterlogging for disease control.</li>
//           <li>Use organic compost to boost soil fertility and improve yields.</li>
//           <li>Scout fields weekly for early signs of pests or nutrient deficiencies.</li>
//           <li>Apply fertilizers based on soil test reports for balanced nutrition.</li>
//           <li>Promote beneficial insects (like ladybugs) to naturally suppress pests.</li>
//           <li>Remove weeds promptly to prevent competition for water and nutrients.</li>
//           <li>Practice safe pesticide application—always follow recommended doses.</li>
//           <li>Protect young plants from extreme weather with mulching.</li>
//           <li>Record crop health observations in a notebook for easy reference.</li>
//         </ul>
//       </div>
//     </>
//   );
// }

// /----------------------
import React, { useState } from "react";
import "./Component.css";

export default function CropMonitor({ goBack }) {   // ✅ receive goBack
  const [preview, setPreview] = useState(null);
  const [response, setResponse] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(`
      <b>AI Crop Health & Pest Analysis:</b><br>
      <ul>
        <li>The leaves appear healthy, deep green with minor yellow spots. Monitor for possible nitrogen deficiency.</li>
        <li>No visible signs of pest infestation detected. Continue regular monitoring.</li>
        <li><b>Tip:</b> Ensure proper irrigation and avoid water stagnation to reduce risk of fungal disease.</li>
        <li>If brown patches increase, consider consulting local agricultural expert for fertilizer adjustment.</li>
      </ul>
    `);
  };

  return (
    <>
      
      <div 
        className="cropheader"
        onClick={goBack}
        style={{ cursor: "pointer" }}
      >
       Crop Monitoring - AI Crop Health 
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Upload a picture of your crop:</label>

          <div
            className="file-upload"
            onClick={() => document.getElementById("cropImage").click()}
          >
            <span>Click here or drag an image to upload</span>
            <input
              type="file"
              id="cropImage"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              required
            />
          </div>

          {preview && <img src={preview} alt="Crop Preview" className="preview-img" />}

          <button className="submit-btn" type="submit">Get AI Analysis</button>
        </form>

        {response && (
          <div
            className="response-box"
            dangerouslySetInnerHTML={{ __html: response }}
          />
        )}
      </div>

      <div className="tips-section">
        <h2>Farming Tips for Healthy Crops</h2>
        <ul>
          <li>Rotate crops regularly to improve soil health and reduce pest buildup.</li>
          <li>Ensure irrigation is uniform and avoid waterlogging for disease control.</li>
          <li>Use organic compost to boost soil fertility and improve yields.</li>
          <li>Scout fields weekly for early signs of pests or nutrient deficiencies.</li>
          <li>Apply fertilizers based on soil test reports for balanced nutrition.</li>
          <li>Promote beneficial insects (like ladybugs) to naturally suppress pests.</li>
          <li>Remove weeds promptly to prevent competition for water and nutrients.</li>
          <li>Practice safe pesticide application—always follow recommended doses.</li>
          <li>Protect young plants from extreme weather with mulching.</li>
          <li>Record crop health observations in a notebook for easy reference.</li>
        </ul>
      </div>
    </>
  );
}

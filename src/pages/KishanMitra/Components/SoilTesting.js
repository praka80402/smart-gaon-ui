// import React, { useState } from "react";
// // import "./SoilCropTestingPortal.css"; // move styles to a separate file

// export default function SoilTesting() {
//   const [state, setState] = useState("");
//   const [district, setDistrict] = useState("");
//   const [labs, setLabs] = useState([]);

//   const stateDistricts = {
//     Bihar: [
//       "Patna",
//       "Gaya",
//       "Muzaffarpur",
//       "Bhagalpur",
//       "Darbhanga",
//       "Nalanda",
//       "Purnia",
//       "Munger",
//     ],
//     "Uttar Pradesh": [
//       "Lucknow",
//       "Kanpur",
//       "Varanasi",
//       "Agra",
//       "Meerut",
//       "Allahabad",
//       "Bareilly",
//     ],
//     "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Rewa"],
//     Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur"],
//     Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Alwar", "Kota"],
//   };

//   const labsDatabase = {
//     Bihar: {
//       Patna: [
//         "ICMR-Patna Soil & Crop Lab, Bailey Road, Patna",
//         "ICAR-NRRI Regional Rice Research Station (Soil Section)",
//       ],
//       Gaya: ["ICMR Gaya Soil Testing Centre, Bodh Gaya Road"],
//     },
//     "Uttar Pradesh": {
//       Lucknow: ["ICMR Lucknow Soil & Water Lab, Gomti Nagar"],
//       Kanpur: ["ICAR The Kanpur Soil & Water Lab"],
//     },
//     "Madhya Pradesh": { Bhopal: ["ICMR Bhopal Crop Testing Center"] },
//     Maharashtra: { Pune: ["ICMR Pune Soil Testing Center"] },
//     Rajasthan: { Jaipur: ["ICMR Jaipur Soil & Crop Health Lab"] },
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (state && district) {
//       const foundLabs =
//         labsDatabase[state]?.[district] || [
//           "No ICMR/ICAR labs found in selected district yet.",
//         ];
//       setLabs(foundLabs);
//     }
//   };

//   return (
//     <div>
//       <div className="header">Soil & Crop Testing Portal</div>

//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="form-row">
//             <select value={state} onChange={(e) => setState(e.target.value)} required>
//               <option value="">Select State</option>
//               {Object.keys(stateDistricts).map((st) => (
//                 <option key={st} value={st}>
//                   {st}
//                 </option>
//               ))}
//             </select>

//             <select value={district} onChange={(e) => setDistrict(e.target.value)} required>
//               <option value="">Select District</option>
//               {stateDistricts[state]?.map((dist) => (
//                 <option key={dist} value={dist}>
//                   {dist}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button type="submit" className="submit-btn">
//             Find Labs
//           </button>
//         </form>

//         {labs.length > 0 && (
//           <div className="labs-list">
//             <h3>
//               Labs in {district}, {state}:
//             </h3>
//             <ul>
//               {labs.map((lab, index) => (
//                 <li key={index}>{lab}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       <div className="section-title">Animated Healthy Farming</div>
//       <div className="farm-anim">
//         <svg viewBox="0 0 64 64">
//           <ellipse cx="32" cy="57" rx="13" ry="5" fill="#bed897" />
//           <rect x="28" y="20" width="8" height="24" rx="4" fill="#66b240" />
//           <ellipse cx="32" cy="16" rx="9" ry="11" fill="#80d972" />
//           <ellipse cx="32" cy="12" rx="4" ry="6" fill="#378928" />
//         </svg>
//         <svg viewBox="0 0 64 64">
//           <circle cx="48" cy="16" r="10" fill="#ffe27a" />
//           <ellipse cx="24" cy="54" rx="18" ry="8" fill="#b7e392" />
//           <rect x="20" y="44" width="8" height="10" rx="2" fill="#66b240" />
//         </svg>
//         <svg viewBox="0 0 64 64">
//           <ellipse cx="44" cy="47" rx="11" ry="5" fill="#a3e8ed" />
//           <ellipse cx="22" cy="44" rx="13" ry="7" fill="#90d295" />
//           <ellipse cx="44" cy="41" rx="4" ry="7" fill="#41b5ae" />
//           <ellipse cx="22" cy="40" rx="3" ry="6" fill="#49c166" />
//         </svg>
//       </div>

//       <div className="section-title">Top Farming Tips for Healthy Soil & Crops</div>
//       <div className="tips-block">
//         {[
//           {
//             img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&w=400&q=80",
//             title: "Use Organic Compost",
//             desc: "Apply compost for better soil fertility, moisture retention, and microbial life.",
//           },
//           {
//             img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&w=400&q=80",
//             title: "Rotate Crops Regularly",
//             desc: "Switch crops each season to reduce pests, diseases, and nutrient depletion.",
//           },
//           {
//             img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&w=400&q=80",
//             title: "Smart Water Management",
//             desc: "Implement drip irrigation, mulching, and timely watering to keep roots strong.",
//           },
//           {
//             img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&w=400&q=80",
//             title: "Test Soil Before Sowing",
//             desc: "Lab soil analysis guides fertilizer use and crop selection for better yields.",
//           },
//           {
//             img: "https://images.unsplash.com/photo-1444392064706-21d7a3b3ed34?auto=format&w=400&q=80",
//             title: "Mulching for Protection",
//             desc: "Spread straw or leaves to reduce water loss and protect roots.",
//           },
//         ].map((tip, i) => (
//           <div className="tip-item" key={i}>
//             <img src={tip.img} alt={tip.title} />
//             <div className="tip-title">{tip.title}</div>
//             <div className="tip-desc">{tip.desc}</div>
//           </div>
//         ))}
//       </div>

//       <div className="footer">
//         &copy; 2025 | Smart Agri Tech | Soil & Crop Testing Portal
//       </div>
//     </div>
//   );
// }

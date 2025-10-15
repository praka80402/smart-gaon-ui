// import React from "react";
// import "./KishanMitra.css";
// // import logo from "../../assets/logo-1.png"; // ✅ Update your logo path

// export default function KishanMitra() {
//   const schemes = [
//     {
//       icon: "🏠",
//       title: "PM Awas Yojana",
//       color: "green",
//       links: ["Check Eligibility", "Apply Online", "Track Application"],
//     },
//     {
//       icon: "🌾",
//       title: "PM Kisan Samman Nidhi",
//       color: "green",
//       links: ["Check Eligibility", "Apply Online", "Track Payment"],
//     },
//     {
//       icon: "💰",
//       title: "Jan Dhan Yojana",
//       color: "purple",
//       links: ["Check Eligibility", "Apply Online", "Find Bank Branch"],
//     },
//     {
//       icon: "🏥",
//       title: "Ayushman Bharat",
//       color: "green",
//       links: ["Check Eligibility", "Apply for Card", "Find Hospital"],
//     },
//     {
//       icon: "⚡",
//       title: "Solar Rooftop Scheme",
//       color: "sun",
//       links: ["Check Eligibility", "Apply Online", "Calculate Subsidy"],
//     },
//     {
//       icon: "👩‍💼",
//       title: "Mudra Loan Yojana",
//       color: "green",
//       links: ["Check Eligibility", "Apply Online", "Track Application"],
//     },
//     {
//       icon: "🍽️",
//       title: "Ration Card Services",
//       color: "green",
//       links: ["Apply for New Card", "Update Details", "Check Status"],
//     },
//     {
//       icon: "🚜",
//       title: "Krishi Yantra Subsidy",
//       color: "green",
//       links: ["Check Eligibility", "Apply Online", "View Approved List"],
//     },
//     {
//       icon: "👶",
//       title: "Maternity Benefit Scheme",
//       color: "purple",
//       links: ["Check Eligibility", "Apply Online", "Track Payment"],
//     },
//     {
//       icon: "🎓",
//       title: "Education Scholarships",
//       color: "green",
//       links: ["Check Eligibility", "Apply Online", "Track Application"],
//     },
//     {
//       icon: "🏛️",
//       title: "Pension Schemes",
//       color: "green",
//       links: ["Old Age Pension", "Widow Pension", "Disability Pension"],
//     },
//     {
//       icon: "💡",
//       title: "Skill Development",
//       color: "sun",
//       links: ["Check Courses", "Apply for Training", "Find Centers"],
//     },
//   ];

//   return (
//     <div className="sarkari-container">
//       {/* Header */}
//       <header className="sarkari-header">
//         <div className="sarkari-header-content">
//           <div className="sarkari-header-left">
//             {/* <img src={logo} alt="Smart Gaon Logo" className="sarkari-logo" /> */}
//             <h2>Government Schemes Portal</h2>
//           </div>
//         </div>
//       </header>

//       {/* Page Intro */}
//       <section className="sarkari-intro">
//         <h1>Sarkari Yojana</h1>
//         <p>
//           Access all government schemes, check your eligibility, and apply
//           online for various welfare programs designed for rural development and
//           citizen empowerment.
//         </p>
//       </section>

//       {/* Scheme Cards Grid */}
//       <div className="sarkari-grid">
//         {schemes.map((scheme, i) => (
//           <div className="sarkari-card" key={i}>
//             <div className={`sarkari-icon ${scheme.color}`}>{scheme.icon}</div>
//             <h3 className="sarkari-card-title">{scheme.title}</h3>
//             <ul>
//               {scheme.links.map((link, j) => (
//                 <li key={j}>
//                   <a href="#!" className={`link-${scheme.color}`}>
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Quick Actions */}
//       <section className="sarkari-actions">
//         <h2>Quick Actions</h2>
//         <div className="sarkari-buttons">
//           <button>Check All Eligibility</button>
//           <button>My Applications</button>
//           <button>Help & Support</button>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React from "react";
// import "../Styles/Sidebar.css";

// export default function Sidebar() {
//   const services = [
//     "Seva Bazar",
//     "My Village",
//     "Gram Doctor",
//     "Gaon Bazar",
//     "Weather Forecast",
//     "Kisan Mitra",
//     "Sarkari Seva",
//     "Shiksha Sahayak",
//     "Donation",
//   ];

//   return (
//     <aside className="sidebar">
//       <h3>Our Services</h3>
//       <ul>
//         {services.map((s, i) => (
//           <li key={i}>{s}</li>
//         ))}
//       </ul>
//     </aside>
//   );
// }
import React from "react";
import { Link } from "react-router-dom"; 
import "../Styles/Sidebar.css";

export default function Sidebar() {
  // List of services with their route paths
  const services = [
    
    { name: "Sarkari Seva", path: "/sarkari-seva" },
    { name: "Shiksha Sahayak", path: "/shiksha-sahayak" },
    { name: "Gram Doctor", path: "/gram-doctor" },
     { name: "Kisan Mitra", path: "/kishanMitra" },
    { name: "Gaon Connect", path: "/gaon-connect" },
    { name: "Seva Bazar", path: "/sewa-bazaar" },
    { name: "Gaon Bazar", path: "/gaon-bazaar" },
    { name: "Weather Forecast", path: "/weather-forecast" },
   { name: "Donation", path: "/donation" },
  ];

  return (
    <aside className="sidebar">
      <h3>Our Services</h3>
      <ul>
        {services.map((s, i) => (
          <li key={i}>
            <Link to={s.path}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

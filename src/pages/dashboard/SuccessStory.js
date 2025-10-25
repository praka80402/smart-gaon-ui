// import React from "react";
// import "./SuccessStory.css";

// const stories = [
//   {
//     name: "Ravi Kumar",
//     story: "With our platform, Ravi expanded his farming network and increased crop sales by 40%.",
//     location: "Uttar Pradesh",
//   },
//   {
//     name: "Sita Devi",
//     story: "Sita learned about new government schemes and got support for her dairy business.",
//     location: "Bihar",
//   },
//   {
//     name: "Amit Singh",
//     story: "Amit connected with local buyers through the app and now runs a successful organic farm.",
//     location: "Maharashtra",
//   },
// ];

// export default function SuccessStory() {
//   return (
//     <section className="success-section">
//       <h2 className="success-title">Our Success Stories</h2>
//       <div className="success-grid">
//         {stories.map((s, i) => (
//           <div key={i} className="success-card">
//             <h3>{s.name}</h3>
//             <p className="story">{s.story}</p>
//             <p className="location">📍 {s.location}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// --------------------------

import React, { useEffect, useState } from "react";
import "./SuccessStory.css";

const storiesData = [
  {
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Amit Kumar",
    address: "Patna, Bihar",
    summary:
      "I started my notebook business with Career Notebooks. High quality and timely delivery helped me grow rapidly.",
    details:
      "I started my notebook business with Career Notebooks. High quality and timely delivery helped me grow rapidly. Their bulk purchase program saved me money and their customer service is always available. I went from a small store to a chain of shops in Danapur. My partnership with Career Notebooks has grown stronger every year. The product variety keeps my customers coming back. Their integrated logistics system ensures my shelves are never empty during peak season. I recommend them to all aspiring retailers.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Rita Singh",
    address: "Danapur, Bihar",
    summary:
      "Career Notebooks helped me set up my new shop. Their variety and bulk order options are fantastic.",
    details:
      "Career Notebooks helped me set up my new shop. Their variety and bulk order options are fantastic. Customers love the product, leading to increased footfall. I found their support team easy to reach and always willing to solve issues quickly. Since joining hands with them, I have organized several school distribution programs in my area. The impact has been tremendous. Their eco-friendly notebooks have won praise from teachers and parents alike.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Mukesh Verma",
    address: "Khagaul, Patna",
    summary:
      "Switching to Career Notebooks improved my inventory quality. Fast shipping and affordable rates allowed me to serve schools better.",
    details:
      "Switching to Career Notebooks improved my inventory quality. Fast shipping and affordable rates allowed me to serve schools better. The notebooks are durable, and I appreciate the personalized support from their staff. With Career Notebooks, I never worry about running out of stock or getting delayed deliveries.",
  },
];

// export default function SuccessStory() {
//   const [stories, setStories] = useState([]);
//   const [selectedStory, setSelectedStory] = useState(null);

//   useEffect(() => {
//     // duplicate stories for smooth marquee scroll
//     setStories([...storiesData, ...storiesData]);
//   }, []);

//   return (
//     <div className="success-page">
//       <header className="success-header">Success Stories</header>

//       <div className="marquee-container">
//         <div className="marquee">
//           {stories.map((story, i) => (
//             <div key={i} className="story-card">
//               <img src={story.img} alt={story.name} />
//               <div className="name">{story.name}</div>
//               <div className="address">{story.address}</div>
//               <div className="summary">{story.summary}</div>
//               <button onClick={() => setSelectedStory(story)}>View More</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dialog Modal */}
//       {selectedStory && (
//         <div className="dialog-overlay" onClick={() => setSelectedStory(null)}>
//           <div
//             className="dialog-box"
//             onClick={(e) => e.stopPropagation()} // prevent close on inner click
//           >
//             <button
//               className="close-btn"
//               onClick={() => setSelectedStory(null)}
//             >
//               ✕
//             </button>
//             <img src={selectedStory.img} alt={selectedStory.name} />
//             <h3>{selectedStory.name}</h3>
//             <p>
//               <strong>Address:</strong> {selectedStory.address}
//             </p>
//             <p>{selectedStory.details}</p>
//           </div>
//         </div>
//       )}

      
//     </div>
//   );
// }
export default function SuccessStory() {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isPaused, setIsPaused] = useState(false); // ✅ NEW STATE

  useEffect(() => {
    setStories([...storiesData, ...storiesData]);
  }, []);

  return (
    <div className="success-page">
      <header className="success-header">Success Stories</header>

      <div 
        className="marquee-container"
        onMouseEnter={() => setIsPaused(true)}   // ✅ Pause scroll on hover
        onMouseLeave={() => !selectedStory && setIsPaused(false)} // ✅ Resume only if modal not open
      >
        <div className={`marquee ${isPaused ? "paused" : ""}`}>   {/* ✅ Add toggle class */}
          {stories.map((story, i) => (
            <div key={i} className="story-card">
              <img src={story.img} alt={story.name} />
              <div className="name">{story.name}</div>
              <div className="address">{story.address}</div>
              <div className="summary">{story.summary}</div>
              <button onClick={() => { setSelectedStory(story); setIsPaused(true); }}> {/* ✅ Stop when modal opens */}
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedStory && (
        <div className="dialog-overlay" onClick={() => { setSelectedStory(null); setIsPaused(false); }}> {/* ✅ Resume when closed */}
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => { setSelectedStory(null); setIsPaused(false); }}>✕</button>
            <img src={selectedStory.img} alt={selectedStory.name} />
            <h3>{selectedStory.name}</h3>
            <p><strong>Address:</strong> {selectedStory.address}</p>
            <p>{selectedStory.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

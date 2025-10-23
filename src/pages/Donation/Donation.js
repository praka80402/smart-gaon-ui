

// import React, { useState } from "react";
// import "./Donation.css";

// export default function Donation() {
//   const [project, setProject] = useState("");
//   const [amount, setAmount] = useState("");
//   const [showPaymentBox, setShowPaymentBox] = useState(false);
//   const [showReceiptBox, setShowReceiptBox] = useState(false);
//   const [receiptData, setReceiptData] = useState({});

//   const handleDonate = () => {
//     if (!project || !amount || amount <= 0) {
//       alert("Please select a project and enter a valid amount!");
//       return;
//     }
//     setShowPaymentBox(true);
//   };

//   const processPayment = (method) => {
//     const now = new Date();
//     const date = now.toLocaleDateString() + " " + now.toLocaleTimeString();
//     const transaction = "TXN" + Math.floor(Math.random() * 1e7);
//     setReceiptData({ project, amount, method, date, transaction });
//     setShowPaymentBox(false);
//     setTimeout(() => setShowReceiptBox(true), 500);
//   };

//   const ongoingProjects = [
//     {
//       title: "Clean Water Initiative",
//       desc: "Bringing safe, clean drinking water to rural communities through wells and filtration systems.",
//       img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80",
//     },
//     {
//       title: "Education for All",
//       desc: "Delivering books, scholarships, and digital learning to underprivileged children.",
//       img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=256&q=80",
//     },
//     {
//       title: "Healthcare Support",
//       desc: "Free health camps and vaccination drives for communities in need.",
//       img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&q=80",
//     },
//     {
//       title: "Tree Plantation Drive",
//       desc: "Large-scale tree-planting events to promote green spaces.",
//       img: "https://www.maasavitringo.org/wp-content/uploads/2024/07/CMP_TP_3.jpg",
//     },
//   ];

//   return (
//     <div className="donation-page">
//       {/* Header */}
//       <header className="donation-header">
//         <h1>Donation - Smart Contribution</h1>
//       </header>

//       {/* Donation Card */}
//       <div className="donation-box">
//         <h2>Welcome to Smart Donation 💚</h2>
//         <p className="donation-subtext">
//           Contribute to meaningful projects that empower villages and improve lives.
//         </p>

//         <label>Select Project</label>
//         <select value={project} onChange={(e) => setProject(e.target.value)}>
//           <option value="">Select a running project</option>
//           {ongoingProjects.map((p) => (
//             <option key={p.title} value={p.title}>
//               {p.title}
//             </option>
//           ))}
//         </select>

//         <label>Enter Amount (INR)</label>
//         <input
//           type="number"
//           min="1"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Enter amount to donate"
//         />

//         <button onClick={handleDonate}>Donate Now</button>
//       </div>

//       {/* Ongoing Projects */}
//       <div className="project-section">
//         <h3>Ongoing Projects</h3>
//         <div className="project-grid">
//           {ongoingProjects.map((p, i) => (
//             <div className="project-card" key={i}>
//               <img src={p.img} alt={p.title} />
//               <div className="project-info">
//                 <h4>{p.title}</h4>
//                 <p>{p.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Payment Modal */}
//       {showPaymentBox && (
//         <div className="donation-overlay" onClick={() => setShowPaymentBox(false)}>
//           <div className="donation-popup" onClick={(e) => e.stopPropagation()}>
//             <h2>Select Payment Method</h2>
//             <div className="payment-options">
//               {["Credit Card", "Debit Card", "Bank Transfer", "UPI"].map((method) => (
//                 <button key={method} onClick={() => processPayment(method)}>
//                   {method}
//                 </button>
//               ))}
//             </div>
//             <button className="close-btn" onClick={() => setShowPaymentBox(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {/* Receipt Modal */}
//       {showReceiptBox && (
//         <div className="donation-overlay" onClick={() => setShowReceiptBox(false)}>
//           <div className="donation-popup" onClick={(e) => e.stopPropagation()}>
//             <h2>Payment Successful</h2>
//             <div className="receipt-box">
//               <p><strong>Project:</strong> {receiptData.project}</p>
//               <p><strong>Amount:</strong> ₹{receiptData.amount}</p>
//               <p><strong>Date:</strong> {receiptData.date}</p>
//               <p><strong>Method:</strong> {receiptData.method}</p>
//               <p><strong>Transaction ID:</strong> {receiptData.transaction}</p>
//             </div>
//             <div className="receipt-buttons">
//               <button onClick={() => window.print()}>Print Receipt</button>
//               <button onClick={() => setShowReceiptBox(false)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "./Donation.css";

export default function Donation() {
  const [project, setProject] = useState("");
  const [amount, setAmount] = useState("");
  const [showPaymentBox, setShowPaymentBox] = useState(false);
  const [showReceiptBox, setShowReceiptBox] = useState(false);
  const [receiptData, setReceiptData] = useState({});

  const projectListRef = useRef(null); // ✅ Ref for auto-scroll

  const handleDonate = () => {
    if (!project || !amount || amount <= 0) {
      alert("Please select a project and enter a valid amount!");
      return;
    }
    setShowPaymentBox(true);
  };

  const processPayment = (method) => {
    const now = new Date();
    const date = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    const transaction = "TXN" + Math.floor(Math.random() * 1e7);
    setReceiptData({ project, amount, method, date, transaction });
    setShowPaymentBox(false);
    setTimeout(() => setShowReceiptBox(true), 500);
  };

  const ongoingProjects = [
    {
      title: "Clean Water Initiative",
      desc: "Bringing safe, clean drinking water to rural communities through wells and filtration systems.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80",
    },
    {
      title: "Education for All",
      desc: "Delivering books, scholarships, and digital learning to underprivileged children.",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=256&q=80",
    },
    {
      title: "Healthcare Support",
      desc: "Free health camps and vaccination drives for communities in need.",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&q=80",
    },
    {
      title: "Tree Plantation Drive",
      desc: "Large-scale tree-planting events to promote green spaces.",
      img: "https://www.maasavitringo.org/wp-content/uploads/2024/07/CMP_TP_3.jpg",
    },
  ];

  // ✅ Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (projectListRef.current) {
        const scrollAmount = projectListRef.current.scrollLeft + 280; // scroll by one card width
        if (
          scrollAmount >=
          projectListRef.current.scrollWidth - projectListRef.current.clientWidth
        ) {
          projectListRef.current.scrollTo({ left: 0, behavior: "smooth" }); // restart
        } else {
          projectListRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="donation-page">
      {/* Header */}
      <header className="donation-header">
        <h1>Donation - Smart Contribution</h1>
      </header>

      {/* Donation Card */}
      <div className="donation-box">
        <h2>Welcome to Smart Donation 💚</h2>
        <p className="donation-subtext">
          Contribute to meaningful projects that empower villages and improve lives.
        </p>

        <label>Select Project</label>
        <select value={project} onChange={(e) => setProject(e.target.value)}>
          <option value="">Select a running project</option>
          {ongoingProjects.map((p) => (
            <option key={p.title} value={p.title}>
              {p.title}
            </option>
          ))}
        </select>

        <label>Enter Amount (INR)</label>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to donate"
        />

        <button onClick={handleDonate}>Donate Now</button>
      </div>

      {/* Ongoing Projects */}
      <div className="project-section">
        <h3>Ongoing Projects</h3>
        <div className="project-grid" ref={projectListRef}>
          {ongoingProjects.map((p, i) => (
            <div className="project-card" key={i}>
              <img src={p.img} alt={p.title} />
              <div className="project-info">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentBox && (
        <div className="donation-overlay" onClick={() => setShowPaymentBox(false)}>
          <div className="donation-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Select Payment Method</h2>
            <div className="payment-options">
              {["Credit Card", "Debit Card", "Bank Transfer", "UPI"].map((method) => (
                <button key={method} onClick={() => processPayment(method)}>
                  {method}
                </button>
              ))}
            </div>
            <button className="close-btn" onClick={() => setShowPaymentBox(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {showReceiptBox && (
        <div className="donation-overlay" onClick={() => setShowReceiptBox(false)}>
          <div className="donation-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Payment Successful</h2>
            <div className="receipt-box">
              <p><strong>Project:</strong> {receiptData.project}</p>
              <p><strong>Amount:</strong> ₹{receiptData.amount}</p>
              <p><strong>Date:</strong> {receiptData.date}</p>
              <p><strong>Method:</strong> {receiptData.method}</p>
              <p><strong>Transaction ID:</strong> {receiptData.transaction}</p>
            </div>
            <div className="receipt-buttons">
              <button onClick={() => window.print()}>Print Receipt</button>
              <button onClick={() => setShowReceiptBox(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

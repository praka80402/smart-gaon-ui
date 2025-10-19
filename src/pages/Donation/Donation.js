// import React, { useState } from "react";
// import "./Donation.css";

// export default function Donation() {
//   const [project, setProject] = useState("");
//   const [amount, setAmount] = useState("");
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showReceipt, setShowReceipt] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [receiptData, setReceiptData] = useState({});

//   const handleDonate = () => {
//     if (!project || !amount || amount <= 0) {
//       alert("Please select a project and enter a valid amount!");
//       return;
//     }
//     setShowPaymentModal(true);
//   };

//   const handlePaymentMethod = (method) => {
//     setPaymentMethod(method);
//   };

//   const processPayment = (method) => {
//     const now = new Date();
//     const date = now.toLocaleDateString() + " " + now.toLocaleTimeString();
//     const transaction = "TXN" + Math.floor(Math.random() * 1e7);

//     setReceiptData({
//       project,
//       amount,
//       method,
//       date,
//       transaction,
//     });

//     setShowPaymentModal(false);
//     setTimeout(() => setShowReceipt(true), 800);
//   };

//   const handlePrint = () => {
//     const printContent = document.getElementById("receiptBox").outerHTML;
//     const printWindow = window.open("", "_blank");
//     printWindow.document.write("<html><head><title>Payment Receipt</title></head><body>");
//     printWindow.document.write(printContent);
//     printWindow.document.write("</body></html>");
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const handleDownload = () => {
//     const { project, amount, method, date, transaction } = receiptData;
//     const text = `PAYMENT RECEIPT

// Project: ${project}
// Amount Paid: ₹${amount}
// Date: ${date}
// Payment Mode: ${method}
// Transaction No.: ${transaction}

// Thank you for your contribution!`;

//     const blob = new Blob([text], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.download = "Donation_Receipt.txt";
//     link.href = window.URL.createObjectURL(blob);
//     link.click();
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
//     <div className="donation-container">
//       <h2>Donate to a Project</h2>

//       <label>Select Project</label>
//       <select value={project} onChange={(e) => setProject(e.target.value)}>
//         <option value="">Select a running project</option>
//         {ongoingProjects.map((p) => (
//           <option key={p.title} value={p.title}>
//             {p.title}
//           </option>
//         ))}
//       </select>

//       <label>Enter Amount (INR)</label>
//       <input
//         type="number"
//         min="1"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder="Enter amount to donate"
//       />

//       <button onClick={handleDonate}>Donate Now</button>

//       {/* ✅ Ongoing Projects Section */}
//       <div className="projects-wrap">
//         <h3>Ongoing Projects</h3>
//         <div className="project-list">
//           {ongoingProjects.map((p, i) => (
//             <div className="project-card" key={i}>
//               <img src={p.img} alt={p.title} />
//               <div className="project-details">
//                 <div className="project-title">{p.title}</div>
//                 <div className="project-desc">{p.desc}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Payment Modal */}
//       {showPaymentModal && (
//         <div className="modal" onClick={() => setShowPaymentModal(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>Select Payment Method</h2>
//             <div className="payment-options">
//               {["Credit Card", "Debit Card", "Bank Transfer", "UPI"].map((method) => (
//                 <button
//                   key={method}
//                   className="option-btn"
//                   onClick={() => processPayment(method)}
//                 >
//                   {method}
//                 </button>
//               ))}
//               <button
//                 style={{ marginTop: 15 }}
//                 onClick={() => setShowPaymentModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ✅ Receipt Modal */}
//       {showReceipt && (
//         <div className="modal" onClick={() => setShowReceipt(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>Payment Successful</h2>
//             <div className="receipt" id="receiptBox">
//               <p>
//                 <strong>Project:</strong> {receiptData.project}
//               </p>
//               <p>
//                 <strong>Amount Paid:</strong> ₹{receiptData.amount}
//               </p>
//               <p>
//                 <strong>Date:</strong> {receiptData.date}
//               </p>
//               <p>
//                 <strong>Payment Mode:</strong> {receiptData.method}
//               </p>
//               <p>
//                 <strong>Transaction No.:</strong> {receiptData.transaction}
//               </p>
//             </div>
//             <div className="receipt-btns">
//               <button onClick={handlePrint}>Print Receipt</button>
//               <button onClick={handleDownload}>Download as PDF</button>
//               <button onClick={() => setShowReceipt(false)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Donation.css";

export default function Donation() {
  const [project, setProject] = useState("");
  const [amount, setAmount] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState({});

  const handleDonate = () => {
    if (!project || !amount || amount <= 0) {
      alert("Please select a project and enter a valid amount!");
      return;
    }
    setShowPaymentModal(true);
  };

  const processPayment = (method) => {
    const now = new Date();
    const date = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    const transaction = "TXN" + Math.floor(Math.random() * 1e7);
    setReceiptData({ project, amount, method, date, transaction });
    setShowPaymentModal(false);
    setTimeout(() => setShowReceipt(true), 800);
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

  return (
    <div className="donation-page">
      {/* ✅ Page Header */}
      <header className="donation-header">
        <h1>Donation - Smart Contribution</h1>
      </header>

      {/* ✅ Centered Card */}
      <div className="donation-card">
        <h2>Welcome to Smart Donation 💚</h2>
        <p className="subtitle">
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

      {/* ✅ Ongoing Projects */}
      <div className="projects-section">
        <h3>Ongoing Projects</h3>
        <div className="project-list">
          {ongoingProjects.map((p, i) => (
            <div className="project-card" key={i}>
              <img src={p.img} alt={p.title} />
              <div className="project-details">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Payment Modal */}
      {showPaymentModal && (
        <div className="modal" onClick={() => setShowPaymentModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Select Payment Method</h2>
            <div className="payment-options">
              {["Credit Card", "Debit Card", "Bank Transfer", "UPI"].map(
                (method) => (
                  <button
                    key={method}
                    className="option-btn"
                    onClick={() => processPayment(method)}
                  >
                    {method}
                  </button>
                )
              )}
              <button onClick={() => setShowPaymentModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Receipt Modal */}
      {showReceipt && (
        <div className="modal" onClick={() => setShowReceipt(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Payment Successful</h2>
            <div className="receipt" id="receiptBox">
              <p><strong>Project:</strong> {receiptData.project}</p>
              <p><strong>Amount Paid:</strong> ₹{receiptData.amount}</p>
              <p><strong>Date:</strong> {receiptData.date}</p>
              <p><strong>Payment Mode:</strong> {receiptData.method}</p>
              <p><strong>Transaction No.:</strong> {receiptData.transaction}</p>
            </div>
            <div className="receipt-btns">
              <button onClick={() => window.print()}>Print Receipt</button>
              <button onClick={() => setShowReceipt(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


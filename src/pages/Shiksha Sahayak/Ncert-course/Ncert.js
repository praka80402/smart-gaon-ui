// import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import "./Ncert.css";
// import { Link } from "react-router-dom";
// const Ncert = () => {
//   const [selectedClass, setSelectedClass] = useState("");
//   const [selectedSubject, setSelectedSubject] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState("english");
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [pdfTitle, setPdfTitle] = useState("Chapter PDF Viewer");

//   const chapterData = {
//     hindi: ["Chapter 1: परिचय", "Chapter 2: व्याकरण", "Chapter 3: कहानी", "Chapter 4: कविता"],
//     english: ["Chapter 1: Alphabet", "Chapter 2: Sentences", "Chapter 3: Reading", "Chapter 4: Essay"],
//     maths: ["Chapter 1: Numbers", "Chapter 2: Addition/Subtraction", "Chapter 3: Geometry", "Chapter 4: Fractions", "Chapter 5: Algebra"],
//     science: ["Chapter 1: Living Things", "Chapter 2: Plants", "Chapter 3: Human Body", "Chapter 4: Environment", "Chapter 5: Physics"],
//     social: ["Chapter 1: History", "Chapter 2: Geography", "Chapter 3: Civics", "Chapter 4: Economy"],
//   };

//   // Generate dummy PDF
//   const generateDummyPDF = (chapterTitle) => {
//     const doc = new jsPDF();
//     doc.text(`Dummy PDF for ${chapterTitle}`, 20, 20);
//     doc.text(`This is a sample NCERT-like chapter content.`, 20, 40);
//     return URL.createObjectURL(doc.output("blob"));
//   };

//   // Load chapter PDF
//   const loadChapterPDF = (chapterTitle) => {
//     setPdfTitle(`Viewing: ${chapterTitle}`);

//     // Example: NCERT PDF for Class 11 → Political Science
//     if (selectedClass === "11" && selectedSubject === "social") {
//       const ncertUrl = "https://ncert.nic.in/textbook/pdf/bejm1ps.pdf";
//       const proxyUrl = `http://localhost:8080/api/pdf/fetch?url=${encodeURIComponent(ncertUrl)}`;
//       setPdfUrl(proxyUrl);
//     } else {
//       const blobUrl = generateDummyPDF(chapterTitle);
//       setPdfUrl(blobUrl);
//     }
//   };

//   // Download button
//   const handleDownload = () => {
//     if (!pdfUrl) return;
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.setAttribute("download", `${pdfTitle.replace(/\s+/g, "_")}.pdf`);
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//   };

//   // Print button
//   const handlePrint = () => {
//     const iframe = document.getElementById("pdfIframe");
//     if (iframe) iframe.contentWindow.print();
//   };

//   const chapters = selectedSubject ? chapterData[selectedSubject] || [] : [];

//   return (
//      <div className="ncert-page">
//         <div className="back-header">
//         <Link to="/shiksha-sahayak/school-learning" className="back-arrow">
//           ←
//         </Link>
//       </div>
//       <h1 className="text-center mb-4">Shiksha Sahayak - NCERT Study Materials</h1>
//       <p className="text-center text-muted">
//         Select Class, Subject, and Language to view chapter PDFs. Download or print for offline use.
//       </p>

      
//       <div className="filters row">
//         <div className="col-md-4 mb-3">
//           <label className="form-label">Class (कक्षा)</label>
//           <select
//             className="form-select"
//             value={selectedClass}
//             onChange={(e) => setSelectedClass(e.target.value)}
//           >
//             <option value="">Select Class</option>
//             {[...Array(12)].map((_, i) => (
//               <option key={i + 1} value={i + 1}>
//                 Class {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <label className="form-label">Subject (विषय)</label>
//           <select
//             className="form-select"
//             value={selectedSubject}
//             onChange={(e) => setSelectedSubject(e.target.value)}
//           >
//             <option value="">Select Subject</option>
//             <option value="hindi">Hindi (हिंदी)</option>
//             <option value="english">English (अंग्रेजी)</option>
//             <option value="maths">Maths (गणित)</option>
//             <option value="science">Science (विज्ञान)</option>
//             <option value="social">Social Science (समाजिक विज्ञान)</option>
//           </select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <label className="form-label">Language/Medium (भाषा)</label>
//           <select
//             className="form-select"
//             value={selectedLanguage}
//             onChange={(e) => setSelectedLanguage(e.target.value)}
//           >
//             <option value="english">English Medium</option>
//             <option value="hindi">Hindi Medium</option>
//           </select>
//         </div>
//       </div>

//       <div className="row">
//         {/* Left: Chapter List */}
//         <div className="col-md-4">
//           <h3>Chapters (अध्याय)</h3>
//           <div className="thumbnails">
//             {!selectedClass || !selectedSubject ? (
//               <p className="text-muted">Please select Class and Subject.</p>
//             ) : (
//               chapters.map((chapter, i) => (
//                 <div
//                   key={i}
//                   className="card thumbnail-card"
//                   onClick={() => loadChapterPDF(chapter)}
//                 >
//                   <div className="card-body">
//                     <div className="thumbnail-img">{chapter}</div>
//                     <p className="card-text mt-2">{chapter}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Right: PDF Viewer */}
//         <div className="col-md-8">
//           <h3>{pdfTitle}</h3>
//           <div className="controls mb-2">
//             <button
//               className="btn btn-outline-primary me-2"
//               onClick={handlePrint}
//               disabled={!pdfUrl}
//             >
//               Print (प्रिंट)
//             </button>
//             <button
//               className="btn btn-outline-success"
//               onClick={handleDownload}
//               disabled={!pdfUrl}
//             >
//               Download (डाउनलोड)
//             </button>
//           </div>


//           {pdfUrl ? (
//             <iframe
//               id="pdfIframe"
//               src={pdfUrl}
//               title="PDF Viewer"
//               width="100%"
//               height="600px"
//               style={{
//                 border: "1px solid #ddd",
//                 borderRadius: "5px",
//                 background: "#fff",
//               }}
//             ></iframe>
//           ) : (
//             <div id="pdfViewer" className="text-muted text-center mt-5">
//               Select a chapter to view PDF here.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ncert;


import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./Ncert.css";
import { Link } from "react-router-dom";

const Ncert = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [pdfTitle, setPdfTitle] = useState("Chapter PDF Viewer");

  const chapterData = {
    hindi: ["Chapter 1: परिचय", "Chapter 2: व्याकरण", "Chapter 3: कहानी", "Chapter 4: कविता"],
    english: ["Chapter 1: Alphabet", "Chapter 2: Sentences", "Chapter 3: Reading", "Chapter 4: Essay"],
    maths: ["Chapter 1: Numbers", "Chapter 2: Addition/Subtraction", "Chapter 3: Geometry", "Chapter 4: Fractions", "Chapter 5: Algebra"],
    science: ["Chapter 1: Living Things", "Chapter 2: Plants", "Chapter 3: Human Body", "Chapter 4: Environment", "Chapter 5: Physics"],
    social: ["Chapter 1: History", "Chapter 2: Geography", "Chapter 3: Civics", "Chapter 4: Economy"],
  };

  const generateDummyPDF = (chapterTitle) => {
    const doc = new jsPDF();
    doc.text(`Dummy PDF for ${chapterTitle}`, 20, 20);
    doc.text(`This is a sample NCERT-like chapter content.`, 20, 40);
    return URL.createObjectURL(doc.output("blob"));
  };

  const loadChapterPDF = (chapterTitle) => {
    setPdfTitle(`Viewing: ${chapterTitle}`);

    if (selectedClass === "11" && selectedSubject === "social") {
      const ncertUrl = "https://ncert.nic.in/textbook/pdf/bejm1ps.pdf";
      const proxyUrl = `http://localhost:8080/api/pdf/fetch?url=${encodeURIComponent(ncertUrl)}`;
      setPdfUrl(proxyUrl);
    } else {
      const blobUrl = generateDummyPDF(chapterTitle);
      setPdfUrl(blobUrl);
    }
  };

  const handleDownload = () => {
    if (!pdfUrl) return;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", `${pdfTitle.replace(/\s+/g, "_")}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handlePrint = () => {
    const iframe = document.getElementById("pdfIframe");
    if (iframe) iframe.contentWindow.print();
  };

  const chapters = selectedSubject ? chapterData[selectedSubject] || [] : [];

  return (
    <div className="ncert-page">
      <div className="back-header">
        <Link to="/shiksha-sahayak" className="back-arrow">
          ←
        </Link>
      </div>

      <h1 className="text-center mb-4">Shiksha Sahayak - NCERT Study Materials</h1>
      <p className="text-center text-muted">
        Select Class, Subject, and Language to view chapter PDFs. Download or print for offline use.
      </p>

      <div className="filters row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Class (कक्षा)</label>
          <select
            className="form-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select Class</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Class {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Subject (विषय)</label>
          <select
            className="form-select"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="hindi">Hindi (हिंदी)</option>
            <option value="english">English (अंग्रेजी)</option>
            <option value="maths">Maths (गणित)</option>
            <option value="science">Science (विज्ञान)</option>
            <option value="social">Social Science (समाजिक विज्ञान)</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Language/Medium (भाषा)</label>
          <select
            className="form-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="english">English Medium</option>
            <option value="hindi">Hindi Medium</option>
          </select>
        </div>
      </div>

      <div className="row">
        {/* Left: Chapter List */}
        <div className="col-md-4">
          <h3>Chapters (अध्याय)</h3>
          <div className="thumbnails">
            {!selectedClass || !selectedSubject ? (
              <p className="text-muted">Please select Class and Subject.</p>
            ) : (
              chapters.map((chapter, i) => (
                <div
                  key={i}
                  className="card thumbnail-card"
                  onClick={() => loadChapterPDF(chapter)}
                >
                  <div className="card-body">
                    <div className="thumbnail-img">{chapter}</div>
                    <p className="card-text mt-2">{chapter}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: PDF Viewer */}
        <div className="col-md-8">
          <div className="pdf-viewer-section">
            <div className="pdf-header-dark">
              <h3>{pdfTitle}</h3>
              <div className="controls">
                <button
                  className="btn btn-light me-2"
                  onClick={handlePrint}
                  disabled={!pdfUrl}
                >
                  Print (प्रिंट)
                </button>
                <button
                  className="btn btn-light"
                  onClick={handleDownload}
                  disabled={!pdfUrl}
                >
                  Download (डाउनलोड)
                </button>
              </div>
            </div>

            {pdfUrl ? (
              <iframe
                id="pdfIframe"
                src={pdfUrl}
                title="PDF Viewer"
                width="100%"
                height="600px"
                style={{
                  border: "none",
                  borderRadius: "0 0 8px 8px",
                  // background: "#fff",
                }}
              ></iframe>
            ) : (
              <div id="pdfViewer" className="text-muted text-center mt-5">
                Select a chapter to view PDF here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ncert;

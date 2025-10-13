// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import "./SchoolSubject.css";

// // export default function SchoolSubject() {
// //   const { classId } = useParams(); // Get class number from URL
// //   const subjectsData = {
// //     1: ["English", "Hindi", "Math"],
// //     2: ["English", "Hindi", "Math"],
// //     3: ["English", "Hindi", "Math", "Science"],
// //     4: ["English", "Hindi", "Math", "Science"],
// //     5: ["English", "Hindi", "Math", "Science"],
// //     // add more subjects for other classes as needed
// //   };

// //   const subjects = subjectsData[classId] || ["No subjects available"];

// //   return (
// //     <div className="subjects-container">
// //       <h1>Class {classId} Subjects</h1>
// //       <div className="subjects-grid">
// //         {subjects.map((subj, index) => (
// //           <div key={index} className="subject-card">
// //             {subj}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";
// import { useParams } from "react-router-dom";
// import "./SchoolSubject.css";

// export default function SchoolSubject() {
//   const { classId } = useParams(); // Get class number from URL

//   // Map subjects to their NCERT URLs
//   const ncertBooks = {
//     1: {
//       English: "https://ncert.nic.in/textbook/pdf/aeen1cc.pdf",
//       Hindi: "https://ncert.nic.in/textbook/pdf/ahhn1cc.pdf",
//       Math: "https://ncert.nic.in/textbook/pdf/aemh1cc.pdf",
//     },
//     2: {
//       English: "https://ncert.nic.in/textbook/pdf/been1cc.pdf",
//       Hindi: "https://ncert.nic.in/textbook/pdf/bhhn1cc.pdf",
//       Math: "https://ncert.nic.in/textbook/pdf/bemh1cc.pdf",
//     },
//     3: {
//       English: "https://ncert.nic.in/textbook/pdf/ceen1cc.pdf",
//       Hindi: "https://ncert.nic.in/textbook/pdf/chhn1cc.pdf",
//       Math: "https://ncert.nic.in/textbook/pdf/cemh1cc.pdf",
//       Science: "https://ncert.nic.in/textbook/pdf/cjsc1cc.pdf",
//     },
//     // add more classes + subjects here
//   };

//   const subjects = Object.keys(ncertBooks[classId] || {});

//   return (
//     <div className="subjects-container">
//       <h1>Class {classId} Subjects</h1>
//       <div className="subjects-grid">
//         {subjects.length > 0 ? (
//           subjects.map((subj, index) => (
//             <a
//               key={index}
//               href={ncertBooks[classId][subj]}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="subject-card"
//             >
//               {subj}
//             </a>
//           ))
//         ) : (
//           <p>No subjects available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";

// import "./ShikshaSahayak.css";

// export default function ShikshaSahayak() {
//   const features = [
//     { title: "School Learning (NCERT-Based)",
//      desc: "Access NCERT syllabus, video lessons, and resources by class/subject.", 
//      path: "/shiksha-sahayak/school-learning" },
//     { title: "Talk to Us (AI Coach)",
//       desc: "Ask study questions via voice input & get AI-generated answers.", 
//       path: "/shiksha-sahayak/ai-coach" },
//     { title: "Practice & Exam Prep",
//          desc: "Practice quizzes, mock exams, progress tracking & leaderboards.", 
//          path: "/shiksha-sahayak/practice" },
//     { title: "Brain Sparks (Daily Quiz)",
//          desc: "Daily quizzes to test your knowledge & stay engaged.",
//           path: "/shiksha-sahayak/brain-sparks" },
//     { title: "Career Guide", 
//         desc: "Explore career paths, success stories & take self-assessment quizzes.",
//          path: "/shiksha-sahayak/career-guide" },
//     { title: "Govt Job Prep (UPSC/SSC)", 
//         desc: "Resources for government exams, GK quizzes & mentorship programs.", 
//         path: "/shiksha-sahayak/govt-prep" },
//     { title: "Offline Learning", 
//         desc: "Download study materials & videos for offline access.", 
//         path: "/shiksha-sahayak/offline-learning" },
//   ];

//   return (
    
//     <div className="page-container" style={{ position: "relative" }}>
      
//       {/* Back Button */}
//       {/* <Link className="back-link" to="/">← Back</Link> */}

//       <h1 className="page-title">Shiksha Sahayak (Education Assistant)</h1>
//       <p className="page-text">
//         Your digital education hub – NCERT learning, AI coach, quizzes,
//         government job prep & career guidance.
//       </p>

//       <div className="feature-grid">
//         {features.map((f, index) => (
//           <Link key={index} to={f.path} style={{ textDecoration: "none" }}>
//             <div className="feature-card">
//               <h2 className="feature-title">{f.title}</h2>
//               <p className="feature-desc">{f.desc}</p>
//               <span className="feature-link">Explore →</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, MessageCircle, Award, Zap, Briefcase, FileText, Download } from "lucide-react";
import "./ShikshaSahayak.css";

export default function ShikshaSahayak() {
  const features = [
    {
      icon: <BookOpen size={40} color="#16a34a" />,
      title: "School Learning (NCERT-Based)",
      desc: ["Access NCERT syllabus", "Video lessons", "Resources by class/subject"],
      path: "/shiksha-sahayak/school-learning"
    },
    {
      icon: <MessageCircle size={40} color="#16a34a" />,
      title: "Talk to Us (AI Coach)",
      desc: ["Ask study questions", "Use voice input", "Get AI-generated answers"],
      path: "/shiksha-sahayak/ai-coach"
    },
    {
      icon: <Award size={40} color="#16a34a" />,
      title: "Practice & Exam Prep",
      desc: ["Practice quizzes", "Mock exams", "Track progress & ranks"],
      path: "/shiksha-sahayak/practice"
    },
    {
      icon: <Zap size={40} color="#16a34a" />,
      title: "Brain Sparks (Daily Quiz)",
      desc: ["Daily quizzes", "Fun challenges", "Earn rewards"],
      path: "/shiksha-sahayak/brain-sparks"
    },
    {
      icon: <Briefcase size={40} color="#16a34a" />,
      title: "Career Guide",
      desc: ["Career paths", "Success stories", "Self-assessment quizzes"],
      path: "/shiksha-sahayak/career-guide"
    },
    {
      icon: <FileText size={40} color="#16a34a" />,
      title: "Govt Job Prep (UPSC/SSC)",
      desc: ["GK quizzes", "Mentorship", "Exam resources"],
      path: "/shiksha-sahayak/govt-prep"
    },
    {
      icon: <Download size={40} color="#16a34a" />,
      title: "Offline Learning",
      desc: ["Download materials", "Watch videos offline", "Study anytime"],
      path: "/shiksha-sahayak/offline-learning"
    }
  ];

  return (
    <div className="shiksha-page">
     

      <header className="gd-header">
        <div className="gd-header-content">
          <div className="gd-header-left">
            {/* <img src={logo} alt="Smart Gaon Logo" className="gd-logo" /> */}
             <h2>Shiksha Sahayak - Education Portal</h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <h1 className="shiksha-title">Education Assistant</h1>
      <p className="shiksha-subtext">
        Access learning tools, AI coaching, quizzes, and government exam preparation all in one place.
      </p>

      <div className="shiksha-grid">
        {features.map((f, index) => (
          <Link key={index} to={f.path} className="shiksha-card">
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <ul>
              {f.desc.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

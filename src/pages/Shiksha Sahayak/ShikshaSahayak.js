import React from "react";
import { Link } from "react-router-dom";

import "./ShikshaSahayak.css";

export default function ShikshaSahayak() {
  const features = [
    { title: "School Learning (NCERT-Based)",
     desc: "Access NCERT syllabus, video lessons, and resources by class/subject.", 
     path: "/shiksha-sahayak/school-learning" },
    { title: "Talk to Us (AI Coach)",
      desc: "Ask study questions via voice input & get AI-generated answers.", 
      path: "/shiksha-sahayak/ai-coach" },
    { title: "Practice & Exam Prep",
         desc: "Practice quizzes, mock exams, progress tracking & leaderboards.", 
         path: "/shiksha-sahayak/practice" },
    { title: "Brain Sparks (Daily Quiz)",
         desc: "Daily quizzes to test your knowledge & stay engaged.",
          path: "/shiksha-sahayak/brain-sparks" },
    { title: "Career Guide", 
        desc: "Explore career paths, success stories & take self-assessment quizzes.",
         path: "/shiksha-sahayak/career-guide" },
    { title: "Govt Job Prep (UPSC/SSC)", 
        desc: "Resources for government exams, GK quizzes & mentorship programs.", 
        path: "/shiksha-sahayak/govt-prep" },
    { title: "Offline Learning", 
        desc: "Download study materials & videos for offline access.", 
        path: "/shiksha-sahayak/offline-learning" },
  ];

  return (
    
    <div className="page-container" style={{ position: "relative" }}>
      
      {/* Back Button */}
      {/* <Link className="back-link" to="/">← Back</Link> */}

      <h1 className="page-title">Shiksha Sahayak (Education Assistant)</h1>
      <p className="page-text">
        Your digital education hub – NCERT learning, AI coach, quizzes,
        government job prep & career guidance.
      </p>

      <div className="feature-grid">
        {features.map((f, index) => (
          <Link key={index} to={f.path} style={{ textDecoration: "none" }}>
            <div className="feature-card">
              <h2 className="feature-title">{f.title}</h2>
              <p className="feature-desc">{f.desc}</p>
              <span className="feature-link">Explore →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

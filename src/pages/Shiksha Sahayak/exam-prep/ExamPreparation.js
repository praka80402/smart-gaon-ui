import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ExamPreparation = () => {
  const [exam, setExam] = useState("");
  const [language, setLanguage] = useState("");

  const videoData = {
    ssc: {
      hindi: [
        { title: "SSC Preparation Tips in Hindi (Main Video)", id: "V1jBpybYoLk" },
        { title: "SSC Maths Tricks Hindi", id: "dQw4w9WgXcQ" },
        { title: "SSC Reasoning Hindi", id: "kJGPV18Sg14" },
      ],
      english: [
        { title: "SSC English Prep", id: "exampleSSC_eng1" },
        { title: "SSC GK English", id: "exampleSSC_eng2" },
        { title: "SSC Mock Test English", id: "exampleSSC_eng3" },
      ],
    },
    bpsc: {
      hindi: [
        { title: "BPSC History Hindi", id: "exampleBPSC_h1" },
        { title: "BPSC Current Affairs Hindi", id: "exampleBPSC_h2" },
        { title: "BPSC Strategy Hindi", id: "exampleBPSC_h3" },
      ],
      english: [
        { title: "BPSC Overview English", id: "exampleBPSC_e1" },
        { title: "BPSC Syllabus English", id: "exampleBPSC_e2" },
        { title: "BPSC Tips English", id: "exampleBPSC_e3" },
      ],
    },
    upsc: {
      hindi: [
        { title: "UPSC GS Paper Hindi (Main Video)", id: "hCU3BG4Yc_s" },
        { title: "UPSC Essay Hindi", id: "exampleUPSC_h1" },
        { title: "UPSC Interview Hindi", id: "exampleUPSC_h2" },
      ],
      english: [
        { title: "UPSC Strategy English", id: "exampleUPSC_e1" },
        { title: "UPSC CSAT English", id: "exampleUPSC_e2" },
        { title: "UPSC Optional English", id: "exampleUPSC_e3" },
      ],
    },
    railways: {
      hindi: [
        { title: "Railways GK Hindi (Main Video)", id: "NJKsUMRJzW0" },
        { title: "Railways Maths Hindi", id: "exampleRail_h1" },
        { title: "Railways Reasoning Hindi", id: "exampleRail_h2" },
      ],
      english: [
        { title: "Railways Preparation English", id: "exampleRail_e1" },
        { title: "Railways Science English", id: "exampleRail_e2" },
        { title: "Railways Mock English", id: "exampleRail_e3" },
      ],
    },
  };

  const videos = videoData[exam]?.[language] || [];

  return (
    <div>
      <style>{`
        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
          min-height: 100vh;
        }
        .hero-header {
          background: linear-gradient(45deg, #4caf50, #81c784);
          color: white;
          padding: 40px 0;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .main-content {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          margin: 20px auto;
          max-width: 1165px;
        }
        .form-select {
          border-radius: 8px;
          border: 1px solid #ddd;
          margin-bottom: 15px;
        }
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .video-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }
        .video-card:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }
        .video-card h6 {
          padding: 10px;
          margin: 0;
          background: #f8f9fa;
          font-size: 16px;
          font-weight: bold;
        }
        .video-iframe {
          width: 100%;
          height: 200px;
          border: none;
        }
        .loading {
          text-align: center;
          color: #666;
          padding: 40px;
          font-size: 18px;
        }
        footer {
          background: #2e7d32;
          color: white;
          padding: 20px 0;
          text-align: center;
          margin-top: 40px;
        }
        @media (max-width: 768px) {
          .main-content { margin: 10px; padding: 20px; }
          .hero-header { padding: 20px 0; }
          .video-iframe { height: 150px; }
          .video-grid { grid-template-columns: 1fr; }
        }
      `}</style>

     

      {/* Main Content */}
      <div className="container">
        <div className="main-content" style={{ marginTop: '70px' }}>
          <h2 className="text-center mb-4">
            <i className="fas fa-graduation-cap text-success me-2"></i>
            Welcome to Exam Preparation
          </h2>
          <p className="text-muted text-center mb-4">
            Prepare for government exams like SSC, UPSC, and more. Select your exam and language to get relevant YouTube videos for tips, strategies, and mocks.
          </p>

          {/* Selections */}
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="examSelect" className="form-label fw-bold">Exam (परीक्षा)</label>
              <select
                id="examSelect"
                className="form-select"
                value={exam}
                onChange={(e) => setExam(e.target.value)}
              >
                <option value="">Select Exam</option>
                <option value="ssc">SSC</option>
                <option value="bpsc">BPSC</option>
                <option value="upsc">UPSC</option>
                <option value="railways">Railways</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="languageSelect" className="form-label fw-bold">Language (भाषा)</label>
              <select
                id="languageSelect"
                className="form-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select Language</option>
                <option value="hindi">Hindi (हिंदी)</option>
                <option value="english">English (अंग्रेजी)</option>
              </select>
            </div>
          </div>

          {/* Video Container */}
          <div id="videosContainer" className="mt-4">
            {!exam || !language ? (
              <div className="loading">
                <i className="fas fa-spinner fa-spin me-2"></i>
                Select Exam and Language to load videos.
              </div>
            ) : videos.length === 0 ? (
              <div className="loading text-danger">
                No videos available for this selection. Try another.
              </div>
            ) : (
              <>
                <h5 className="mb-3 text-center">
                  <i className="fas fa-video text-warning me-2"></i>
                  Videos for {exam.toUpperCase()} in{" "}
                  {language.charAt(0).toUpperCase() + language.slice(1)} (
                  {videos.length} videos)
                </h5>
                <div className="video-grid">
                  {videos.map((video, index) => (
                    <div className="video-card" key={index}>
                      <h6>{video.title}</h6>
                      <iframe
                        className="video-iframe"
                        src={`https://www.youtube.com/embed/${video.id}?rel=0&autoplay=0`}
                        allowFullScreen
                        loading="lazy"
                        title={video.title}
                      ></iframe>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ExamPreparation;

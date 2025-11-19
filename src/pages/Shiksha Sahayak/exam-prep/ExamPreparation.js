import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./ExamPreparation.css";

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

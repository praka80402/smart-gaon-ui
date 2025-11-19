import React, { useState } from "react";
import "./GramDoctor.css";
// import logo from "../../logo.svg"; 

export default function GramDoctor() {
  const [conceiveDate, setConceiveDate] = useState("");
  const [pregnancyResult, setPregnancyResult] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [recommendations, setRecommendations] = useState("");

  // ✅ Pregnancy Tracker Logic
  const calculatePregnancy = () => {
    if (!conceiveDate) return alert("Please enter a valid conception date");

    const conceive = new Date(conceiveDate);
    const today = new Date();
    if (conceive > today) return alert("Please select a past date");

    const daysDiff = Math.floor((today - conceive) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(daysDiff / 7);
    const days = daysDiff % 7;
    const dueDate = new Date(conceive);
    dueDate.setDate(dueDate.getDate() + 280);
    const remainingDays = Math.max(
      0,
      Math.floor((dueDate - today) / (1000 * 60 * 60 * 24))
    );

    setPregnancyResult({
      weeks,
      days,
      dueDate: dueDate.toLocaleDateString(),
      remainingDays,
    });
  };

  // ✅ Symptom Checker Logic
  const handleSymptomChange = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const checkSymptoms = () => {
    if (selectedSymptoms.length === 0)
      return alert("Please select at least one symptom");

    let recs = [];
    if (selectedSymptoms.includes("fever"))
      recs.push("Take rest and stay hydrated.", "Use fever medication if needed.");
    if (selectedSymptoms.includes("headache"))
      recs.push("Rest in a quiet, dark room.", "Stay hydrated.");
    if (selectedSymptoms.includes("cough") || selectedSymptoms.includes("cold"))
      recs.push("Drink warm liquids.", "Use a humidifier or inhale steam.");
    if (selectedSymptoms.includes("bodyache"))
      recs.push("Apply warm compress.", "Gentle stretching helps.");
    if (selectedSymptoms.includes("nausea"))
      recs.push("Eat small, frequent meals.", "Avoid strong odors.");

    recs.push("If symptoms persist, consult a doctor immediately.");
    setRecommendations(recs);
  };

  return (
    <div className="gramdoctor-container">
      {/* Header */}
      <header className="gd-header">
        <div className="gd-header-content">
          <div className="gd-header-left">
            {/* <img src={logo} alt="Smart Gaon Logo" className="gd-logo" /> */}
            <h2>Gram Doctor - Health Portal</h2>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="gd-intro">
        <h1>Your Health, Our Priority</h1>
        <p>
          Consult with qualified doctors, track your pregnancy, get personalized
          health tips, and receive medical guidance based on your symptoms - all
          from your village.
        </p>
      </section>

      {/* Service Cards */}
      <div className="gd-grid">
        {[
          {
            icon: "👨‍⚕️",
            title: "Doctor Consultation",
            color: "green",
            links: ["Book Appointment", "Video Consultation", "View Doctors"],
          },
          {
            icon: "🤱",
            title: "Pregnancy Tracker",
            color: "green",
            links: ["Track Your Journey", "Weekly Tips", "Reminders"],
          },
          {
            icon: "🩺",
            title: "Symptom Checker",
            color: "green",
            links: ["Check Symptoms", "Get Recommendations", "Emergency Advice"],
          },
          {
            icon: "💊",
            title: "Medicine Guide",
            color: "green",
            links: ["Medicine Info", "Dosage Guide", "Side Effects"],
          },
          {
            icon: "🍎",
            title: "Health Tips",
            color: "green",
            links: ["Daily Health Tips", "Nutrition Guide", "Exercise Tips"],
          },
          {
            icon: "🩹",
            title: "First Aid Guide",
            color: "green",
            links: ["Emergency Care", "Home Remedies", "Call Doctor"],
          },
          {
            icon: "👶",
            title: "Child Health",
            color: "green",
            links: ["Vaccination", "Growth Tracker", "Child Care Tips"],
          },
          {
            icon: "👴",
            title: "Senior Care",
            color: "green",
            links: ["Health Checkups", "Chronic Care", "Medication Reminders"],
          },
        ].map((card, i) => (
          <div className="gd-card" key={i}>
            <div className={`gd-icon ${card.color}`}>{card.icon}</div>
            <h3>{card.title}</h3>
            <ul>
              {card.links.map((link, j) => (
                <li key={j}>
                  <a href="#!" className={`link-${card.color}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pregnancy Tracker */}
      <section className="gd-section purple-bg" id="pregnancy-tracker">
        <h2>Pregnancy Tracker</h2>
        <p>Enter your conception date to track your pregnancy journey</p>
        <input
          type="date"
          value={conceiveDate}
          onChange={(e) => setConceiveDate(e.target.value)}
        />
        <button onClick={calculatePregnancy}>Track My Pregnancy</button>

        {pregnancyResult && (
          <div className="gd-result">
            <h3>Your Pregnancy Journey</h3>
            <p>
              You are {pregnancyResult.weeks} weeks and {pregnancyResult.days}{" "}
              days pregnant.
            </p>
            <p>Expected Due Date: {pregnancyResult.dueDate}</p>
            <p>Days Remaining: {pregnancyResult.remainingDays}</p>
          </div>
        )}
      </section>

      {/* Symptom Checker */}
      <section className="gd-section" id="symptom-checker">
        <h2>Symptom Checker</h2>
        <p>Select your symptoms and get health recommendations</p>

        <div className="gd-symptoms">
          {["fever", "headache", "cough", "cold", "bodyache", "nausea"].map(
            (s) => (
              <label key={s}>
                <input
                  type="checkbox"
                  checked={selectedSymptoms.includes(s)}
                  onChange={() => handleSymptomChange(s)}
                />
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </label>
            )
          )}
        </div>

        <button onClick={checkSymptoms}>Get Health Guidance</button>

        {recommendations && (
          <div className="gd-result">
            <h3>Health Recommendations</h3>
            <ul>
              {recommendations.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Emergency Section */}
      <section className="gd-emergency">
        <h2>Emergency Services</h2>
        <div className="gd-emergency-buttons">
          <button className="red">Emergency Call</button>
          <button>Ambulance Service</button>
          <button>Nearest Hospital</button>
          <button>Health Helpline</button>
        </div>
      </section>
    </div>
  );
}

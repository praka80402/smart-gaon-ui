

import React from "react";
import "./SarkariSeva.css";

export default function SarkariSeva() {
  const schemes = [
    {
      icon: "🏠",
      title: "PM Awas Yojana",
      color: "green",
      links: [
        { label: "Check Eligibility", url: "https://pmaymis.gov.in/pmaymis2_2024/PMAY_SURVEY/EligiblityCheck.aspx" },
        { label: "Apply Online", url: "https://pmaymis.gov.in/PMAYMIS2_2024/PMAY_SURVEY/EligiblityCheck.aspx" },
        { label: "Track Application", url: "https://pmaymis.gov.in/track_application_status.aspx" },
      ],
    },
    {
      icon: "🌾",
      title: "PM Kisan Samman Nidhi",
      color: "green",
      links: [
        { label: "Check Eligibility", url: "https://pmkisan.gov.in/" },
        { label: "Apply Online", url: "https://pmkisan.gov.in/RegistrationFormupdated.aspx" },
        { label: "Track Payment", url: "https://pmkisan.gov.in/BeneficiaryStatus_New.aspx" },
      ],
    },
    {
      icon: "💰",
      title: "Jan Dhan Yojana",
      color: "green",
      links: [
        { label: "Check Eligibility", url: "https://sbi.bank.in/web/faq-s/faq-pradhan-mantri-jan-dhan-yojana-pmjdy" },
        { label: "Apply Online", url: "https://www.pmjdy.gov.in/files/forms/account-opening/hindi.pdf" },
        { label: "Find Bank Branch", url: "https://www.pmjdy.gov.in/" },
      ],
    },
    {
      icon: "🏥",
      title: "Ayushman Bharat",
      color: "green",
      links: [
        { label: "Check Eligibility", url: "https://beneficiary.nha.gov.in/" },
        { label: "Apply for Card", url: "https://beneficiary.nha.gov.in/" },
        { label: "Find Hospital", url: "https://hospitals.pmjay.gov.in/Search/empnlWorkFlow.htm?actionFlag=ViewRegisteredHosptlsNew" },
      ],
    },
    {
      icon: "⚡",
      title: "Solar Rooftop Scheme",
      color: "green",
      links: [
        { label: "Registered Vendors", url: "https://consumer.pmsuryaghar.gov.in/consumer/#/registered-vendors" },
        { label: "Apply ", url: "https://consumer.pmsuryaghar.gov.in/consumer/#/login" },
        { label: "Subsidy Details ", url: "https://pmsuryaghar.gov.in/#/consumer-financing-options " },
      ],
    },
    {
      icon: "👩‍💼",
      title: "Mudra Loan Yojana",
      color: "green",
     links: [
    { label: "Eligibility", url: "https://www.mudra.org.in/Offerings" },
    { label: "Download Form", url: "https://www.mudra.org.in/Home/PMMYBankersKit" }
  ],
      // links: ["Check Eligibility", "Apply Online"],
    },
    {
      icon: "🍽️",
      title: "Ration Card Services",
      color: "green",
       links: [
    { label: "Apply Online", url: "https://rconline.bihar.gov.in/" },
    { label: "Modification", url: "https://services.india.gov.in/service/detail/ration-card-modifications-epds-integration-application-form" }
  ],
      // links: ["Apply for New Card", "Update Details", "Check Status"],
    },
    {
      icon: "🚜",
      title: "Krishi Yantra Subsidy",
      color: "green",
        links: [
    { label: "Check Eligibility", url: "https://www.myscheme.gov.in/schemes/ky#eligibility" },
    { label: "Apply Online", url: "https://sso.rajasthan.gov.in/register" }
  ],
    //  links: ["Check Eligibility", "Apply Online", "View Approved List"],
    },
    {
      icon: "👶",
      title: "Maternity Benefit Scheme",
      color: "green",
      links: [
        { label: "Check Eligibility", url: "https://www.myscheme.gov.in/schemes/pmmvy#eligibility" },
        { label: "Apply ", url: "https://pmmvy.wcd.gov.in/ManageCitizenGrievance/RegisterGrievance" },
        { label: "Track Payment ", url: "https://pmmvy.wcd.gov.in/ManageTrackBeneficiary/TrackBeneficiary" },
      ],
      // links: ["Check Eligibility", "Apply Online", "Track Payment"],
    },
    {
      icon: "🎓",
      title: "Education Scholarships",
      color: "green",
      links: [
        { label: "Check Eligibility", url: "https://indiafellow.org/apply-now/" },
        { label: "Apply Online ", url: "https://indiafellow.org/apply-now/" },
        // { label: "Subsidy Details ", url: "https://pmsuryaghar.gov.in/#/consumer-financing-options " },
      ],
      // links: ["Check Eligibility", "Apply Online", "Track Application"],
    },
    {
      icon: "🏛️",
      title: "Pension Schemes",
      color: "green",
      links: [
        { label: "Old Age Pension", url: "https://www.sspmis.bihar.gov.in/CheckMvpyAadharAuth" },
        // { label: "Apply ", url: "https://consumer.pmsuryaghar.gov.in/consumer/#/login" },
        // { label: "Subsidy Details ", url: "https://pmsuryaghar.gov.in/#/consumer-financing-options " },
      ],
      // links: ["Old Age Pension", "Widow Pension", "Disability Pension"],
    },
    {
      icon: "💡",
      title: "Skill Development",
      color: "green",
       links: [
        { label: "Check Courses", url: " https://skillmissionbihar.org/" },
        { label: "Apply for Training ", url:" https://skillmissionbihar.org/"  },
        { label: "Find Centers", url: " https://skillmissionbihar.org/" },
      ],
      // links: ["Check Courses", "Apply for Training", "Find Centers"],
    },
  ];

  return (
    <div className="sarkari-container">
      <header className="sarkari-header">
        <div className="sarkari-header-content">
          <div className="sarkari-header-left">
            <h2>Sarkari Seva - Government Schemes Portal</h2>
          </div>
        </div>
      </header>

      <section className="sarkari-intro">
        <h1>Sarkari Yojana</h1>
        <p>
          Access all government schemes, check your eligibility, and apply
          online for various welfare programs designed for rural development and
          citizen empowerment.
        </p>
      </section>

      <div className="sarkari-grid">
        {schemes.map((scheme, i) => (
          <div className="sarkari-card" key={i}>
            <div className={`sarkari-icon ${scheme.color}`}>{scheme.icon}</div>
            <h3 className="sarkari-card-title">{scheme.title}</h3>
            <ul>
              {scheme.links.map((link, j) => (
                <li key={j}>
                  {typeof link === "string" ? (
                    <a href="#!" className={`link-${scheme.color}`}>
                      {link}
                    </a>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-${scheme.color}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="sarkari-actions">
        <h2>Quick Actions</h2>
        <div className="sarkari-buttons">
          <button>Check All Eligibility</button>
          <button>My Applications</button>
          <button>Help & Support</button>
        </div>
      </section>
    </div>
  );
}

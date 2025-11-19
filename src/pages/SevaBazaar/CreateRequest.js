import React, { useState } from "react";
import "./SevaBazaar.css";

export default function CreateRequest() {
  const [form, setForm] = useState({ description: "", budget: "", date: "", time: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="sewa-container">
      <h2 className="section-title">Post a Work Request</h2>
      <textarea
        name="description"
        placeholder="Describe your job..."
        className="input-field"
        value={form.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="budget"
        placeholder="Budget (₹)"
        className="input-field"
        value={form.budget}
        onChange={handleChange}
      />
      <div className="inline-fields">
        <input type="date" name="date" className="input-field" value={form.date} onChange={handleChange} />
        <input type="time" name="time" className="input-field" value={form.time} onChange={handleChange} />
      </div>
      <button className="submit-btn">Submit Request</button>
    </div>
  );
}

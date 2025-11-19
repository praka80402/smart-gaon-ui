import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("⚠️ Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth/reset-password?token=${token}&newPassword=${password}`
      );
      setMessage("✅ Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setMessage("❌ Invalid or expired token. Please try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#f4f9f4" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "380px", borderRadius: "15px" }}
      >
        <h4 className="text-center mb-3 text-success">Reset Your Password</h4>
        <form onSubmit={handleReset}>
          <div className="mb-3">
            <label className="form-label fw-semibold">New Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Reset Password
          </button>
        </form>

        {message && (
          <div className="mt-3 text-center fw-medium">{message}</div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";

type UserData = {
  id: string;
  email: string;
  role: "user" | "admin";
} | null;

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState<UserData>(null);

  const handleApiRequest = async (
    url: string,
    options: RequestInit,
    successMessage: string
  ) => {
    setMessage("Loading...");
    try {
      const res = await fetch(url, {
        ...options,
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setMessage(`${successMessage}`);
      return data;
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
      setUserData(null);
    }
  };

  /* ---------------- AUTH ---------------- */

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    handleApiRequest(
      "/api-v1/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
      "Signup successful"
    );
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    handleApiRequest(
      "/api-v1/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
      "Login successful"
    );
  };

  const handleLogout = () => {
    handleApiRequest(
      "/api-v1/auth/logout",
      { method: "POST" },
      "Logout successful"
    );
    setUserData(null);
  };

  const handleRefresh = () => {
    handleApiRequest(
      "/api-v1/auth/refresh",
      { method: "POST" },
      "Token refreshed"
    );
  };

  const handleGetMe = async () => {
    const data = await handleApiRequest(
      "/api-v1/auth/me",
      { method: "GET" },
      "Fetched current user"
    );
    if (data) setUserData(data);
  };

  /* ---------------- UI ---------------- */

  const buttonStyle: React.CSSProperties = {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#0070f3",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  };

  const preStyle: React.CSSProperties = {
    backgroundColor: "#f4f4f4",
    border: "1px solid #ddd",
    padding: "1rem",
    borderRadius: "6px",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  };

  return (
    <main style={{ maxWidth: 800, margin: "auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>
        Secure Next.js Auth Demo
      </h1>

      {/* AUTH FORM */}
      <div style={{ border: "1px solid #ccc", padding: "1.5rem", borderRadius: 8 }}>
        <h2>Signup / Login</h2>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button type="button" onClick={handleSignup} style={buttonStyle}>
              Sign Up
            </button>
            <button type="submit" style={buttonStyle}>
              Log In
            </button>
          </div>
        </form>
      </div>

      {/* ACTIONS */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1.5rem",
          borderRadius: 8,
          marginTop: "2rem",
        }}
      >
        <h2>API Actions</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button onClick={handleGetMe} style={buttonStyle}>
            Get Current User
          </button>
          <button onClick={handleRefresh} style={buttonStyle}>
            Refresh Token
          </button>
          <button
            onClick={handleLogout}
            style={{ ...buttonStyle, backgroundColor: "#d9534f" }}
          >
            Log Out
          </button>

        </div>
      </div>

      {/* OUTPUT */}
      <div style={{ marginTop: "2rem" }}>
        <h2>API Response</h2>
        <pre style={preStyle}>{message || "Waiting..."}</pre>

        {userData && (
          <>
            <h2>Current User</h2>
            <pre style={preStyle}>{JSON.stringify(userData, null, 2)}</pre>
          </>
        )}
      </div>
    </main>
  );
}

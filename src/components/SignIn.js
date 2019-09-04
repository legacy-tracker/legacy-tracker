import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  console.log(email, password);
  return (
    <div id="background">
      <div className="register-card">
        <h1>Sign In</h1>
        <h2 className="register-text">Username</h2>
        <input
          className="register-input"
          placeholder="username"
          onChange={handleEmail}
        />
        <h2 className="register-text">Password</h2>
        <input
          type="password"
          className="register-input"
          placeholder="password"
          onChange={handlePassword}
        />
        <Link to="/dashboard">
          <button className="register-btn">Submit</button>
        </Link>
      </div>
    </div>
  );
}

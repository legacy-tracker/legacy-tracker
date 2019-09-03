import React, { useState } from "react";
import "../styles/register.css";

export default function Register() {
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
        <h1>Register</h1>
        <h2 className="register-text">First Name:</h2>
        <input
          className="register-input"
          placeholder="first name"
          onChange={handleEmail}
        />
        <h2 className="register-text">Last Name:</h2>
        <input
          className="register-input"
          placeholder="last name"
          onChange={handleEmail}
        />
        <h2 className="register-text">Username:</h2>
        <input
          className="register-input"
          placeholder="username"
          onChange={handleEmail}
        />
        <h2 className="register-text">Password:</h2>
        <input
          className="register-input"
          placeholder="password"
          onChange={handlePassword}
        />
        <button className="register-btn">Submit</button>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="landing-page">
      <h1>Welcome!</h1>
      <Link to="/signin">
        <button>Login</button>
      </Link>
      <h2>or</h2>
      <Link to="register">
        <button>Register</button>
      </Link>
      <img
        className="background-image"
        src="https://i.imgur.com/C5GXiJQ.jpg"
        alt="football player"
      />
    </div>
  );
}

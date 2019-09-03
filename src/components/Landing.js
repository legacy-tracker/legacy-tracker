import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="nav-container">
        <span className="nav-triangle"></span>
        <nav>Fantasy Football Legacy</nav>
      </div>
      <div className="main-content">
        <h1 className="welcome">Welcome to the Fantasy Football Legacy App</h1>
        <h2 className="sub-welcome">
          Create an account or login to track your team history
        </h2>
        <div className="login-btns">
          <Link to="/signin">
            <button className="landing-btn">
              <span className="btn-words">Login</span>
            </button>
          </Link>
          <Link to="register">
            <button className="landing-btn">
              <span className="btn-words">Register</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

export default function SideMenu() {
  return (
    <aside className="side-menu">
      <h1>Ready for a Challenge?</h1>
      <Link to="/logos">
        <button>make a team</button>
      </Link>
      <button>Mock Draft</button>
    </aside>
  );
}

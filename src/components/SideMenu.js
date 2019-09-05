import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import MakeTeam from "./MakeTeam";

export default function SideMenu() {
  return (
    <aside className="side-menu">
      <div className="team-cards">
        <h1>Ready for a Challenge?</h1>
        <Link to="/logos">
          <button className="challenge-btns">make a team</button>
        </Link>
      </div>
      <MakeTeam />
    </aside>
  );
}

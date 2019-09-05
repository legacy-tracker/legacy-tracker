import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import MakeTeam from "./MakeTeam";

<<<<<<< HEAD
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
=======
export default class SideMenu extends Component {
  render() {
    return (
      <aside className="side-menu">
        <div className="create-team-card">
          <h4 className="card-header">FANTASY FOOTBALL LEGACY</h4>
          <h5 className="card-subheader">CREATE YOUR TEAM</h5>
          <div className="challenge-btn-content">
            <Link to="/logos">
              <button className="challenge-btns">CREATE A TEAM</button>
            </Link>
          </div>
        </div>
      </aside>
    );
  }
>>>>>>> master
}

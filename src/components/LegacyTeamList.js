import React from "react";
import "../styles/dashboard.css";
export default function LegacyTeamList() {
  return (
    <aside className="my-teams">
      <h1 className="my-teams-header">My Teams</h1>
      <div className="cards">
        <div className="team-cards"></div>
        <div className="team-cards"></div>
        <div className="team-cards"></div>
      </div>
    </aside>
  );
}

import React from "react";
import News from "./News";
import LegacyTeamList from "./LegacyTeamList";
import Players from "./Players";
import SideMenu from "./SideMenu";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <h1 id="welcome"> Welcome User!</h1>
      <main className="dashboard">
        <div className="nav-container-2">
          <span className="nav-triangle-2"></span>
          <nav>Fantasy Football Legacy</nav>
        </div>
        <LegacyTeamList />
        <Players />
        <body className="bigbody">
          <div className="nfl-pic">
            <News />
          </div>
        </body>
        <SideMenu />
      </main>
    </div>
  );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import LegacyTeamList from "./LegacyTeamList";

import SideMenu from "./SideMenu";
import "../styles/dashboard.css";
import News from "./News";
import Logos from "./Logos";

export default function Dashboard() {
  return (
    <div>
      <h1 id="welcome"> Welcome User!</h1>
      <div className="dashboard">
        <div className="nav-container-2">
          <span className="nav-triangle-2"></span>
          <nav>Fantasy Football Legacy</nav>
        </div>
        <LegacyTeamList />
        <Players />
        <body className="bigbody">
          <div className="nfl-pic">
            <div className="nfl-pic-top">hi</div>
            <News />
          </div>
        </body>
        <SideMenu />
      </div>
    </div>
  );
}

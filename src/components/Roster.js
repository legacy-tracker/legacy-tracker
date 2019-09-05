import React, { Component } from "react";
import SideMenu from "./SideMenu";
import LegacyTeamList from "./LegacyTeamList";
import "../styles/roster.css";

export default class Roster extends Component {
  render() {
    return (
      <div className="dashboard">
        <LegacyTeamList />
        <div className="roster-rapper">Roster</div>
        <SideMenu />
      </div>
    );
  }
}

import React from "react";
import News from "./News";
import LegacyTeamList from "./LegacyTeamList";
import Players from "./Players";
import SideMenu from "./SideMenu";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <h1> Welcome User!</h1>
      <main className="dashboard">
        <LegacyTeamList />
        <Players />
        <News />
        <SideMenu />
      </main>
    </>
  );
}

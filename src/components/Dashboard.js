import React from "react";
import { Route, Switch } from "react-router-dom";
import LegacyTeamList from "./LegacyTeamList";
import SideMenu from "./SideMenu";
import "../styles/dashboard.css";
import dashboardRoutes from "../dashboardRoutes";
import News from "./News";
import Logos from "./Logos";

export default function Dashboard() {
  return (
    <>
      <h1> Welcome User!</h1>
      <main className="dashboard">
        <LegacyTeamList />
        <Switch>
          <Route path="/" component={News} />
          <Route path="/logos" component={Logos} />
        </Switch>
        <SideMenu />
      </main>
    </>
  );
}

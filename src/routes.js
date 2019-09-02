import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";

export default (
  <Switch>
    <Route componet={Landing} exact path="/" />
    <Route componet={Dashboard} path="/dashboard" />
  </Switch>
);

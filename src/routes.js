import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import Logos from "./components/Logos";
import Register from "./components/Register";

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={SignIn} path="/signin" />
    <Route component={Register} path="/register" />
    <Route component={Logos} path="/logos" />
  </Switch>
);

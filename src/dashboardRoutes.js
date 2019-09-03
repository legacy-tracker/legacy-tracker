import React from "react";
import { Switch, Route } from "react-router-dom";
import News from "./components/News";

export default (
  <Switch>
    <Route compoonent={News} path="/dashboard/news" />
  </Switch>
);

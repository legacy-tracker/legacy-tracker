import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import Logos from "./components/Logos";
import Register from "./components/Register";
import PlayerCard from "./components/PlayerCard";
import Stats from "./components/Stats";
import Roster from "./components/Roster";
import Carousel from "./components/SlideShow/Carousel";
import LoaderIcons from "./components/Loader-Icons";

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={SignIn} path="/signin" />
    <Route component={Register} path="/register" />
    <Route component={Logos} path="/logos" />
    <Route component={PlayerCard} path="/playercard" />
    <Route component={Stats} path="/stats" />
    <Route component={Roster} path="/roster" />
    <Route component={Carousel} path="/carousel" />
    <Route component={LoaderIcons} path="/loadericons" />
  </Switch>
);

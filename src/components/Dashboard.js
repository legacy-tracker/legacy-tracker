import React from "react";
// import { connect } from "react-redux";
// import { logout } from "../ducks/authReducer";
// import { Route, Switch } from "react-router-dom";
import LegacyTeamList from "./LegacyTeamList";

import SideMenu from "./SideMenu";
import "../styles/dashboard.css";
import News from "./News";
import Logos from "./Logos";

class Dashboard extends React.Component {
  // logout() {
  //   axios
  //     .get("/auth/logout")
  //     .then(() => {
  //       this.props.updateUser({});
  //       window.location.reload();
  //     })
  //     .catch(err => console.log(err));
  // }
  // handleLogout = () => {
  //   this.props.logout();
  // };
  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="dash-nav-container">
            <span className="nav-triangle"></span>
            <nav>Fantasy Football Legacy</nav>
            <h1 className="user-welcome">Welcome user!</h1>
            <button className="logout-btn">Logout</button>
          </div>
          <LegacyTeamList />
          <div className="dashboard-main">
            <div className="nfl-pic-top"></div>
            <News />
          </div>
          <SideMenu />
        </div>
      </div>
    );
  }
}

export default Dashboard;

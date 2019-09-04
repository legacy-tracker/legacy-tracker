import React from "react";
// import { connect } from "react-redux";
// import { logout } from "../ducks/authReducer";
// import { Route, Switch } from "react-router-dom";
import LegacyTeamList from "./LegacyTeamList";
import Players from "./Players";
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
        <h1 id="welcome"> Welcome User!</h1>
        <div className="dashboard">
          <div className="nav-container-2">
            <button>Logout</button>
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
}

export default Dashboard;

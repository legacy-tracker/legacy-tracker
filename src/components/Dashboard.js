import React from "react";
// import { connect } from "react-redux";
// import { logout } from "../ducks/authReducer";
// import { Route, Switch } from "react-router-dom";
import LegacyTeamList from "./LegacyTeamList";
import SideMenu from "./SideMenu";
import "../styles/dashboard.css";
import News from "./News";
import Logos from "./Logos";
import Carousel from "./SlideShow/Carousel";
import { logout } from "../ducks/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends React.Component {
  handleLogout = e => {
    this.props.logout();
  };
  render() {
    if (this.props.redirect === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="dashboard">
          <div className="dash-nav-container">
            <span className="nav-triangle"></span>
            <nav>Fantasy Football Legacy</nav>
            <h1 className="user-welcome">Welcome user!</h1>
            <button onClick={this.handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
          <LegacyTeamList />
          <div className="dashboard-main">
            {/* <Carousel /> */}
            <div className="nfl-pic-top"></div>
            <News />
          </div>
          <SideMenu />
        </div>
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    redirect: reduxState.auth.redirect
  };
};

export default connect(
  mapStatetoProps,
  { logout }
)(Dashboard);

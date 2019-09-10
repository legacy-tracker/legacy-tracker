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
import { Redirect, Link } from "react-router-dom";
import Axios from "axios";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }
  handleLogout = e => {
    this.props.logout();
    window.location.reload();
  };

  componentDidMount() {
    Axios.get("/api/user").then(response => {
      this.setState({ username: response.data.username });
    });
  }
  render() {
    if (this.props.username === "") {
      return <Redirect to="/" />;
    }

    // if (this.props.redirect === false) {
    //   return <Redirect to="/" />;
    // }
    console.log(this.props.redirect);
    return (
      <div>
        <div className="dashboard">
          <div className="dash-nav-container">
            <span className="nav-triangle"></span>
            <nav>Fantasy Football Legacy</nav>
            <h1 className="user-welcome">Welcome {this.state.username}</h1>
            {/* <Link to="/"> */}
            <button onClick={this.handleLogout} className="logout-btn">
              Logout
            </button>
            {/* </Link> */}
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
    redirect: reduxState.auth.redirect,
    username: reduxState.auth.username
  };
};

export default connect(
  mapStatetoProps,
  { logout }
)(Dashboard);

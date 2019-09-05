import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/modal.scss";
import MakeTeam from "./MakeTeam";

export default class SideMenu extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <aside className="side-menu">
        <div className="create-team-card">
          <h4 className="card-header">FANTASY FOOTBALL LEGACY</h4>
          <h5 className="card-subheader">CREATE YOUR TEAM</h5>
          <Modal show={this.state.show} handleClose={this.hideModal} />
          <div className="challenge-btn-content">
            <button
              type="button"
              className="challenge-btns"
              onClick={this.showModal}
            >
              CREATE A TEAM
            </button>
            <Link to="/logos"></Link>
          </div>
        </div>
      </aside>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>FANTASY FOOTBALL LEGACY</h1>
        <h2>Enter your team name:</h2>
        <MakeTeam />
        <Link to="/logos">
          <button>submit</button>
        </Link>

        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import MakeTeam from "./MakeTeam";

export default class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

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
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <div className="challenge-btn-content">
            <button
              type="button"
              className="challenge-btns"
              onclick={this.showModal}
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
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

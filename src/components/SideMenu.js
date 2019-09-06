import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/modal.scss";
import MakeTeam from "./MakeTeam";
import { connect } from "react-redux";
import axios from "axios";

class SideMenu extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      changeName: ""
      // team: []
    };
  }
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
          </div>
        </div>
      </aside>
    );
  }
}

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>FANTASY FOOTBALL LEGACY</h1>
        <h2>Enter your team name and season:</h2>
        <MakeTeam />
        <button className="modal-close" onClick={handleClose}>
          close
        </button>
        <Link to="/logos">
          <button
            onSubmit={e => {
              e.preventDefault();
              axios
                .post("/api/team", {
                  // team: this.props.team,
                  changeName: this.props.changeName,
                  username: this.props.username
                })
                .then(response => this.setState({ data: response.data.team }))
                .catch(err => console.log(err));
            }}
            type="submit"
            className="modal-submit"
          >
            submit
          </button>
        </Link>
      </section>
    </div>
  );
};

// let mapStatetoProps = reduxState => {
//   return {
//     username: state.auth.username,
//     changeName: state.legacy.changeName
//   };
// };

// export default connect(
//   mapStatetoProps,
//   {updateUsername, }
// );

//   (state, ownprops) => {
//     return {
//       username: state.auth.username
//       // team: state.legacy.team
//     };
//   },
//   {}
// )(SideMenu);
export default SideMenu;

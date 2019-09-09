import React from "react";
import { connect } from "react-redux";
import { changeYear, changeName, addTeam } from "../ducks/legacyTeamReducer";
import "../styles/modal.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class MakeTeam extends React.Component {
  handleYear = e => {
    this.props.changeYear(e.target.value);
  };
  handleName = e => {
    this.props.changeName(e.target.value);
  };
  render() {
    console.log(this.props);
    return (
      <div className="modal-input-container">
        <input
          type="text"
          onChange={this.handleName}
          placeholder="Team Name"
          required
        />
        <button
          onClick={() => {
            this.props.addTeam(this.props.name);
          }}
          className="modal-submit"
          type="submit"
        >
          <Link to="/logos">submit</Link>
        </button>
        <select onChange={this.handleYear}>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>
      </div>
    );
  }
}
let mapStatetoProps = reduxState => {
  return {
    year: reduxState.legacy.year,
    name: reduxState.legacy.name,
    username: reduxState.auth.username
  };
};
export default connect(
  mapStatetoProps,
  { changeYear, changeName, addTeam }
)(MakeTeam);

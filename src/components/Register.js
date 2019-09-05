import React from "react";
import { Redirect } from "react-router-dom";
import "../styles/register.css";
import { connect } from "react-redux";
import { register } from "../ducks/authReducer";

export class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    };
  }
  handleChangeFirst = e => {
    this.setState({ firstName: e.target.value });
  };
  handleChangelLast = e => {
    this.setState({ lastName: e.target.value });
  };
  handleChangeUsername = e => {
    this.setState({ username: e.target.value });
  };
  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleRegister = e => {
    this.props.register(
      this.state.firstName,
      this.state.lastName,
      this.state.username,
      this.state.password
    );
  };

  render() {
    return (
      <div id="background">
        {this.props.redirect === true ? <Redirect to="./dashboard" /> : null}
        <div className="register-card">
          <h1>Register</h1>
          <h2 className="register-text">First Name:</h2>
          <input
            className="register-input"
            placeholder="first name"
            onChange={this.handleChangeFirst}
          />
          <h2 className="register-text">Last Name:</h2>
          <input
            className="register-input"
            placeholder="last name"
            onChange={this.handleChangelLast}
          />
          <h2 className="register-text">Username:</h2>
          <input
            className="register-input"
            placeholder="username"
            onChange={this.handleChangeUsername}
          />
          <h2 className="register-text">Password:</h2>
          <input
            className="register-input"
            type="password"
            placeholder="password"
            type="password"
            onChange={this.handleChangePassword}
          />
          <button onClick={this.handleRegister} className="register-btn">
            Submit
          </button>
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
  { register }
)(Register);

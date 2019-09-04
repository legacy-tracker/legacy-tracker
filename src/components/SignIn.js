import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { username, login } from "../ducks/authReducer";
import Axios from "axios";

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleEmail = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleLogin = e => {
    this.props.login(this.state.username, this.state.password);
  };
  componentDidMount() {
    Axios.get("/api/user")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
<<<<<<< HEAD
  console.log(email, password);
  return (
    <div id="background">
      <div className="register-card">
        <h1>Sign In</h1>
        <h2 className="register-text">Username</h2>
        <input
          className="register-input"
          placeholder="username"
          onChange={handleEmail}
        />
        <h2 className="register-text">Password</h2>
        <input
          type="password"
          className="register-input"
          placeholder="password"
          onChange={handlePassword}
        />
        <Link to="/dashboard">
          <button className="register-btn">Submit</button>
        </Link>
=======
  render() {
    if (this.props.redirect === true) {
      return <Redirect to="/dashboard" />;
    }
    console.log(this.state);
    return (
      <div id="background">
        <div className="register-card">
          <h1>Sign In</h1>
          <h2 className="register-text">Username</h2>
          <input
            className="register-input"
            placeholder="username"
            onChange={this.handleEmail}
          />
          <h2 className="register-text">Password</h2>
          <input
            className="register-input"
            placeholder="password"
            onChange={this.handlePassword}
          />

          <button onClick={this.handleLogin} className="register-btn">
            Submit
          </button>
        </div>
>>>>>>> master
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    username: reduxState.auth.username,
    redirect: reduxState.auth.redirect
  };
};
export default connect(
  mapStatetoProps,
  { login }
)(SignIn);

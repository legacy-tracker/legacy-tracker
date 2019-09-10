import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { username, login } from "../ducks/authReducer";
import Axios from "axios";
import "../styles/tailwind.css";
import "../styles/signin.css";

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
    this.state = {};
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

  render() {
    if (this.props.redirect === true) {
      return <Redirect to="/dashboard" />;
    }
    // console.log(this.state);
    return (
      // <div id="background">
      //   <div className="register-card">
      //     <h1>Sign In</h1>
      //     <h2 className="register-text">Username</h2>
      //     <input
      //       className="register-input"
      //       placeholder="username"
      //       onChange={this.handleEmail}
      //     />

      //     <h2 className="register-text">Password</h2>
      //     <input
      //       type="password"
      //       className="register-input"
      //       placeholder="password"
      //       type="password"
      //       onChange={this.handlePassword}
      //     />

      //     <button onClick={this.handleLogin} className="register-btn">
      //       Submit
      //     </button>
      //   </div>
      // </div>
      <div class="bg-blue-400 h-screen w-screen">
        <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div
            class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
            id="size"
          >
            <div class="flex flex-col w-full md:w-1/2 p-4">
              <div class="flex flex-col flex-1 justify-center mb-8">
                <h1 class="text-4xl text-center font-thin">Legacy Football</h1>
                <div class="w-full mt-4">
                  <form class="form-horizontal w-3/4 mx-auto">
                    <div class="flex flex-col mt-4">
                      <input
                        onChange={this.handleEmail}
                        id="email"
                        type="text"
                        class="flex-grow h-8 px-2 border rounded border-grey-400"
                        name="username"
                        placeholder="Username"
                      />
                    </div>
                    <div class="flex flex-col mt-4">
                      <input
                        onChange={this.handlePassword}
                        id="password"
                        type="password"
                        class="flex-grow h-8 px-2 rounded border border-grey-400"
                        name="password"
                        required
                        placeholder="Password"
                      />
                    </div>
                    <div class="flex flex-col mt-8">
                      <button
                        onClick={this.handleLogin}
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div class="text-center mt-4">
                    <div class="no-underline hover:underline text-blue-dark text-xs">
                      <Link to="/register">
                        Don't Have an Account? Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="bg" class="hidden md:block md:w-1/2 rounded-r-lg"></div>
          </div>
        </div>
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

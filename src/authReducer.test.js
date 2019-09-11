import axios from "axios";
import {
  LOGIN,
  login,
  LOGOUT,
  logout,
  UPDATE_USERNAME
} from "./ducks/authReducer";
import reducer from "./ducks/authReducer";
import * as actions from "./ducks/authReducer";
import * as types from "./ducks/authReducer";

describe("login", () => {
  let username = "a";
  let password = "a";
  it("should bring in payload", () => {
    const text = "payload";
    const expectedAction = {
      type: LOGIN,
      payload: axios.post("/auth/login", { username, password })
    };
  });
});
describe("use a different login", () => {
  let username = "bbb";
  let password = "bbb";
  it("should bring in payload", () => {
    const text = "payload";
    const expectedAction = {
      type: LOGIN,
      payload: axios.post("/auth/login", { username, password })
    };
  });
});

describe("register", () => {
  let firstName = "a";
  let lastName = "a";
  let username = "a";
  let password = "a";
  it("should bring in payload", () => {
    const text = "payload";
    const expectedAction = {
      type: LOGIN,
      payload: axios.post("/auth/register", {
        firstName,
        lastName,
        username,
        password
      })
    };
  });
});
describe("logout", () => {
  it("should bring in payload", () => {
    const text = "payload";
    const expectedAction = {
      type: LOGOUT,
      payload: axios.get("/auth/logout")
    };
  });
});

describe("updateUsername", () => {
  it("should bring in payload", () => {
    const username = "a";
    const text = "payload";
    const expectedAction = {
      type: UPDATE_USERNAME,
      payload: username
    };
  });
});

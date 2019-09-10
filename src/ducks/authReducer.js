import axios from "axios";

const initialState = {
  username: "",
  password: null,
  error: "",
  redirect: false
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";
const UPDATE_USERNAME = "UPDATE_USERNAME";

export function register(firstName, lastName, username, password) {
  let data = axios.post("/auth/register", {
    firstName,
    lastName,
    username,
    password
  });
  return {
    type: REGISTER,
    payload: data
  };
}

export function login(username, password) {
  let data = axios.post("/auth/login", { username, password });

  return {
    type: LOGIN,
    payload: data
  };
}

export function logout() {
  let data = axios.get("/auth/logout");
  return {
    type: LOGOUT,
    payload: data
  };
}
export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${LOGIN}_FULFILLED`:
      return { ...state, username: payload.data.username, redirect: true };
    case `${REGISTER}_FULFILLED`:
      return { ...state, username: payload.data.username, redirect: true };
    case `${LOGOUT}_FULFILLED`:
      return initialState;
    case `${UPDATE_USERNAME}_FULFILLED`:
      return { ...state, username: payload.data };
    default:
      return state;
  }
}

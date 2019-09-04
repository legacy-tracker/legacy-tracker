import axios from "axios";

const initialState = {
  username: null,
  password: null,
  error: "",
  redirect: false
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

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

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${LOGIN}_FULFILLED`:
      return { ...state, username: payload.data, redirect: true };
    case `${REGISTER}_FULFILLED`:
      return { ...state, username: payload.data };
    default:
      return state;
  }
}

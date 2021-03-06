import axios from "axios";

const initState = {
  year: 2019,
  name: "",
  team: [],
  qb: [],
  rb: [],
  wr: [],
  te: [],
  k: []
};

export const CHANGE_YEAR = "CHANGE_YEAR";
export const CHANGE_NAME = "CHANGE_NAME";
export const ADD_TEAM = "ADD_TEAM";
export const ADD_QB = "ADD_QB";
export const ADD_RB = "ADD_RB";
export const ADD_WR = "ADD_WR";
export const ADD_TE = "ADD_TE";
export const ADD_K = "ADD_K";

export function addQb(value) {
  console.log(value);
  return {
    type: ADD_QB,
    payload: value
  };
}
export function addRb(value) {
  return {
    type: ADD_RB,
    payload: value
  };
}
export function addWr(value) {
  return {
    type: ADD_WR,
    payload: value
  };
}
export function addTe(value) {
  return {
    type: ADD_TE,
    payload: value
  };
}
export function addK(value) {
  return {
    type: ADD_K,
    payload: value
  };
}

export function changeYear(value) {
  return {
    type: CHANGE_YEAR,
    payload: value
  };
}
export function changeName(value) {
  return {
    type: CHANGE_NAME,
    payload: value
  };
}
export function addTeam(name) {
  let data = axios
    .post("/api/team", {
      name
    })
    .then(res => {
      return res.data[0];
    });

  return {
    type: ADD_TEAM,
    payload: data
  };
}

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_YEAR:
      return { ...state, year: payload };
    case CHANGE_NAME:
      return { ...state, name: payload };
    case `${ADD_TEAM}_FULFILLED`:
      return { ...state, team: payload };
    case ADD_QB:
      return { ...state, qb: [...state.qb, payload] };
    case ADD_RB:
      return { ...state, rb: [...state.rb, payload] };
    case ADD_WR:
      return { ...state, wr: [...state.wr, payload] };
    case ADD_TE:
      return { ...state, te: [...state.te, payload] };
    case ADD_K:
      return { ...state, k: [...state.k, payload] };
    default:
      return state;
  }
}

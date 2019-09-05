const initState = {
  year: 2019,
  name: "",
  qb: [],
  rb: [],
  wr: [],
  te: [],
  k: []
};

const CHANGE_YEAR = "CHANGE_YEAR";
const CHANGE_NAME = "CHANGE_NAME";
const ADD_Qb = "ADD_QB";
const ADD_RB = "ADD_RB";
const ADD_WR = "ADD_WR";
const ADD_TE = "ADD_TE";
const ADD_K = "ADD_K";

export function addQb(value) {
  return {
    type: ADD_Qb,
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

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case CHANGE_YEAR:
      return { ...state, year: payload };
    case CHANGE_NAME:
      return { ...state, name: payload };
    case ADD_Qb:
      return { ...state, qb: [...state.qb, ", ", payload] };
    case ADD_RB:
      return { ...state, rb: [...state.rb, ", ", payload] };
    case ADD_WR:
      return { ...state, wr: [...state.wr, ", ", payload] };
    case ADD_TE:
      return { ...state, te: [...state.te, ", ", payload] };
    case ADD_K:
      return { ...state, qb: [...state.k, ", ", payload] };
    default:
      return state;
  }
}

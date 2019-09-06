const initState = {
  year: 2019,
  name: "",
  team: []
};

const CHANGE_YEAR = "CHANGE_YEAR";
const CHANGE_NAME = "CHANGE_NAME";
const ADD_TEAM = "ADD_TEAM";

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
export function addTeam(value) {
  return {
    type: ADD_TEAM,
    payload: value
  };
}

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_YEAR:
      return { ...state, year: payload };
    case CHANGE_NAME:
      return { ...state, name: payload };
    case ADD_TEAM:
      return { ...state, team: payload };
    default:
      return state;
  }
}

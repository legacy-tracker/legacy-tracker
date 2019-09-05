const initState = {
  year: 2019,
  name: ""
};

const CHANGE_YEAR = "CHANGE_YEAR";
const CHANGE_NAME = "CHANGE_NAME";

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
  switch (type) {
    case CHANGE_YEAR:
      return { ...state, year: payload };
    case CHANGE_NAME:
      return { ...state, name: payload };
    default:
      return state;
  }
}

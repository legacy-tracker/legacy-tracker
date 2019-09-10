import axios from "axios";

const initState = {
  players: [],
  playerId: 0,
  playerPosition: ""
};

const GET_PLAYERS = "GET_PLAYERS";
const GET_ID = "GET_ID";
const GET_POSITION = "GET_POSITION";

export function getPlayers(team) {
  let data = axios.get(`/api/userPlayers/${team}`).then(res => {
    return res.data;
  });
  return {
    type: GET_PLAYERS,
    payload: data
  };
}

export function getId(id) {
  let data = id;
  return {
    type: GET_ID,
    payload: data
  };
}

export function getPosition(position) {
  let data = position;
  return {
    type: GET_POSITION,
    payload: data
  };
}

export default function(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_PLAYERS}_FULFILLED`:
      return { ...state, players: payload };
    case GET_ID:
      return { ...state, id: payload };
    case GET_POSITION:
      return { ...state, playerPosition: payload };
    default:
      return state;
  }
}

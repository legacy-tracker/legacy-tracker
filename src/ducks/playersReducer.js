import axios from "axios";

const initState = {
  players: []
};

const GET_PLAYERS = "GET_PLAYERS";

export function getPlayers(team) {
  let data = axios.get(`/api/userPlayers/${team}`).then(res => {
    return res.data;
  });
  return {
    type: GET_PLAYERS,
    payload: data
  };
}

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_PLAYERS}_FULFILLED`:
      return { ...state, players: payload };
    default:
      return state;
  }
}

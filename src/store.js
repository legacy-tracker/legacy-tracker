import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import authReducer from "./ducks/authReducer";
import legacyTeamReducer from "./ducks/legacyTeamReducer";
import playersReducer from "./ducks/playersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  legacy: legacyTeamReducer,
  players: playersReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

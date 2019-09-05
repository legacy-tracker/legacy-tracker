import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import authReducer from "./ducks/authReducer";
import legacyTeamReducer from "./ducks/legacyTeamReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  legacy: legacyTeamReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

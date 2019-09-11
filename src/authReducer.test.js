import axios from "axios";
import reducer from "./ducks/authReducer";
import * as actions from "./ducks/authReducer";
import * as types from "./ducks/authReducer";

describe("AuthReducers", () => {
  it("should return initial state", () => {
    expect(reducer.login(undefined, {})).toEqual(null);
  });
});

// describe("AuthReducer", () => {
//   it("should return the initial state", () => {
//     expect(authReducer.login(undefined, {})).toEquall(null);
//   }),
//     it("should handle LOGIN", () => {
//       expect(
//         authReducer.login(undefined, {
//           login: username,
//           type: `${LOGIN}_FULFILLED`
//         })
//       ).toEqual(username);
//     });
// });

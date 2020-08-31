import * as types from "../Action/actionTypes";
import INITIAL_STATE from "./intialState";

export const GlobalReducer = (state = INITIAL_STATE.global, action: any) => {
  switch (action.type) {
    case types.LOGGEDIN:
      return Object.assign({}, state, {
        loggedInFlag: action.actionData,
      });
    default:
      return state;
  }
};

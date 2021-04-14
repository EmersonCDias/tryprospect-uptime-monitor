import { combineReducers } from "redux";

function uptimes(action = {}, state) {
  switch (state.type) {
    case "SET_UPTIME":
      return {
        ...action,
        [state.payload.data.domain]: state.payload.data
      };
    default:
      return action;
  }
}

export default combineReducers({
  uptimes
});

import store from "./store";

export const setUptime = data =>
  store.dispatch({
    type: "SET_UPTIME",
    payload: {
      data
    }
  });

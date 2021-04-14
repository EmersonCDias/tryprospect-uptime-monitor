import { map } from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import ServerStatus from "./components/ServerStatus";
import startUptimeCheckInterval from "./services/uptime";
import { getUptimes } from "./redux/selectors";

import "./style.css";

function App({ uptimes }) {
	useEffect(startUptimeCheckInterval, [])

  return (
    <div className="container">
      <h1>Uptime Monitor1</h1>

      <div className="columns">
        <div>Domain</div>
        <div>Last Checked</div>
        <div>Latency</div>
        <div>Status</div>
      </div>

      {map(uptimes, ({ domain }, index) => (
        <ServerStatus key={index} domain={domain} />
      ))}
    </div>
  );
}

const enhance = connect(
  state => ({
    uptimes: getUptimes(state)
  }),
  dispatch => ({})
);

export default enhance(App);



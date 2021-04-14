import React from "react";
import moment from "moment";

const ServerStatus = ({
  domain,
  latency,
  status
}) => {
  return (
    <div className="status">
      <div>{domain}</div>
      <div>{domain && moment().format('HH:mm:ss')}</div>
      <div>{latency}</div>
      <div>{status}</div>
    </div>
  );
}

export default ServerStatus;

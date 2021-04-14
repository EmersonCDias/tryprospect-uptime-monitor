import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { map } from "lodash";

import ServerStatus from "./ServerStatus";
import { getUptimeRequest } from '../redux/modules/uptimes/actions'

const Table = () => {
  const dispatch = useDispatch();

  const { list } = useSelector(state => state.domains);
  const { uptimes } = useSelector(state => state);

  const handleGetUptimesData = useCallback(() => {
    for(let i = 0; i < list.length; i++) dispatch(getUptimeRequest(list[i]));
  }, [list]);

  useEffect(handleGetUptimesData, [list]);

  useEffect(() => {
    const interval = setInterval(handleGetUptimesData, 5000);

    return(() => clearInterval(interval));
  }, [list]);

  return (
    <>
      {map(uptimes, ({ domain, latency, status }, index) => (
        <ServerStatus key={index} domain={domain} latency={latency} status={status} />
      ))}
    </>
  )
};

export default Table;

import axios from "axios";

import store from './/redux';
import { setUptime } from ".//actions";

const DOMAINS_TO_CHECK = [
  "passfoo.com",
  "failxx.com",
  "salesforce.com",
  "gmail.com"
];

const checkUptime = async () => {
  const newState = store.getState();
  for (const domain of DOMAINS_TO_CHECK) {
    /**
     * This endpoint is a dummy endpoint we have implemented for the purpose of this challenge.
     *
     * Some gotchas that you should know:
     *
     * - Any domain that starts with "pass___" always returns 'status: OK'
     * - Any domain that starts with "fail___" always returns 'status: FAILED'
     * - All other domains return a status of OK vs FAILED randomly
     */
    const url = `https://uptime-checker.tryprospect.repl.co ${domain}`;
    const response = await axios.get(url);

    setUptime(response.data);
  }
};

export default () => {
  checkUptime().then(() => setInterval(checkUptime, 5000));
};

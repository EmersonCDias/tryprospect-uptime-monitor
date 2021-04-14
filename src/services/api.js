import axios from 'axios';

export default axios.create({
  baseURL: 'https://uptime-checker.tryprospect.repl.co',
});
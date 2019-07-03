import axios from 'axios';
import { connectionURL } from './endPoint';

export const LoginApp = value => {
  return axios.post(connectionURL, value);
};

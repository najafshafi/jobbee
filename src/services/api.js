import axios from 'axios';
import { BASE_API_URL } from './config';

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 12000,
});
export function setToken(token) {
  api.defaults.headers.common.Authorization = 'Bearer ' + token;
}

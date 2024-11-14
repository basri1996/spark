import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});
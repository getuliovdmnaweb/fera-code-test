import axios from "axios";
import { API_HOST, API_KEY, BASE_URL } from "./constants";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": API_HOST,
    "x-rapidapi-key": API_KEY,
  },
});

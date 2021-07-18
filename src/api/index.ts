import axios, { AxiosRequestConfig } from "axios";
import { API_HOST, API_KEY } from "./constants";

export const axiosInstance = axios.create({
  headers: {
    "x-rapidapi-host": API_HOST,
    "x-rapidapi-key": API_KEY,
  },
});

export const api = (() => {
  return {
    get: async (url: string, params?: AxiosRequestConfig) => {
      const response = await axiosInstance.get(url, {
        params: {
          ...params?.params,
        },
      });
      return response.data;
    },
  };
})();

import { api } from "../../api";
import { LEAGUES_URL } from "../../api/constants";

export const fetchLeague = async (country: string): Promise<any> => {
  const response = await api.get(LEAGUES_URL, {
    params: { country },
  });
  return response.response;
};

import { api } from "../../api";
import { LEAGUES_URL } from "../../api/constants";

export const fetchLeague = async (countryCode: string): Promise<any> => {
  const response = await api.get(LEAGUES_URL, {
    params: { code: countryCode },
  });
  return response.response;
};

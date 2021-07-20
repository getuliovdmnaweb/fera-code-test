import { api } from "../../api";
import { LEAGUES_URL, STANDINGS_URL } from "../../api/constants";

export const fetchLeague = async (countryCode: string): Promise<any> => {
  const response = await api.get(LEAGUES_URL, {
    params: { code: countryCode },
  });
  return response.response;
};

export const getLeagueStandings = async (
  leagueId: number,
  leagueYear: number
): Promise<any> => {
  const response = await api.get(STANDINGS_URL, {
    params: { league: leagueId, season: leagueYear },
  });
  return response.response;
};

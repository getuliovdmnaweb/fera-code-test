export const FETCH_LEAGUE_STANDINGS = "standings/FETCH_LEAGUE_STANDINGS";
export const fetchLeagueStandings = (leagueId: number, leagueYear: number) => {
  return {
    type: FETCH_LEAGUE_STANDINGS,
    payload: {
      leagueId,
      leagueYear,
    },
  };
};

export const SET_STANDINGS_LIST = "standings/SET_STANDINGS_LIST";
export const setStandingsList = (list: any[]) => {
  return {
    type: SET_STANDINGS_LIST,
    payload: list,
  };
};

export const SET_LOADING_STANDINGS = "standings/SET_LOADING_LIST";
export const setLoadingStandings = (isLoading: boolean) => {
  return {
    type: SET_LOADING_STANDINGS,
    payload: isLoading,
  };
};

export const SET_LEAGUES_LIST = "leagues/SET_LEAGUES_LIST";

export const setLeaguesList = (list: any[]) => {
  return {
    type: SET_LEAGUES_LIST,
    payload: list,
  };
};

export const FETCH_SEARCHED_LEAGUE = "leagues/FETCH_SEARCHED_LEAGUE";
export const fetchSearchedLeague = (countryCode: string) => {
  return {
    type: FETCH_SEARCHED_LEAGUE,
    payload: countryCode,
  };
};

export const SET_LOADING_LEAGUES = "leagues/SET_LOADING_LEAGUES";

export const setLoadingLeagues = (isLoading: boolean) => {
  return {
    type: SET_LOADING_LEAGUES,
    payload: isLoading,
  };
};

export const SET_TEAM_INFORMATION = "teams/SET_TEAM_INFORMATION";
export const setTeamInformation = (info: any) => {
  return {
    type: SET_TEAM_INFORMATION,
    payload: info,
  };
};

export const FETCH_TEAM_INFORMATION = "teams/FETCH_TEAM_INFORMATION";
export const fetchTeamInformation = (teamId: number) => {
  return {
    type: FETCH_TEAM_INFORMATION,
    payload: teamId,
  };
};

export const SET_LOADING_TEAM = "teams/SET_LOADING_TEAM";
export const setLoadingTeam = (isLoading: boolean) => {
  return {
    type: SET_LOADING_TEAM,
    payload: isLoading,
  };
};

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

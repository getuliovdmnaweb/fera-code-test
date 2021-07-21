import { SET_LOADING_TEAM, SET_TEAM_INFORMATION } from "../actions";

interface ReducerState {
  info: any;
  isLoading: boolean;
}

const initialState: ReducerState = {
  info: {},
  isLoading: false,
};

export const teamReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TEAM_INFORMATION:
      return {
        ...state,
        info: { ...action.payload },
      };
    case SET_LOADING_TEAM:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

import { SET_TEAM_INFORMATION } from "../actions";

interface ReducerState {
  info: any;
}

const initialState: ReducerState = {
  info: {},
};

export const teamReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TEAM_INFORMATION:
      return {
        ...state,
        info: { ...action.payload },
      };
    default:
      return state;
  }
};

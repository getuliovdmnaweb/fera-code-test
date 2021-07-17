import { SET_LEAGUES_LIST } from "../actions";

interface ReducerState {
  list: any[];
}

const initialState: ReducerState = {
  list: [],
};

export const leaguesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LEAGUES_LIST:
      return {
        ...state,
        list: [...(action.payload as any[])],
      };
    default:
      return state;
  }
};

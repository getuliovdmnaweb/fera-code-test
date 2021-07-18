import { SET_LEAGUES_LIST, SET_LOADING_LEAGUES } from "../actions";

interface ReducerState {
  list: any[];
  isLoading: boolean;
}

const initialState: ReducerState = {
  list: [],
  isLoading: false,
};

export const leaguesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LEAGUES_LIST:
      return {
        ...state,
        list: [...(action.payload as any[])],
      };
    case SET_LOADING_LEAGUES:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

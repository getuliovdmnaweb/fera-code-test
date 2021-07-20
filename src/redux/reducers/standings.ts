import { SET_STANDINGS_LIST, SET_LOADING_STANDINGS } from "../actions";

interface ReducerState {
  list: any[];
  isLoading: boolean;
}

const initialState: ReducerState = {
  list: [],
  isLoading: false,
};

export const standingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_STANDINGS_LIST:
      return {
        ...state,
        list: [...(action.payload as any[])],
      };
    case SET_LOADING_STANDINGS:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

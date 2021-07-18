import { SET_STANDINGS_LIST } from "../actions";

interface ReducerState {
  list: any[];
}

const initialState: ReducerState = {
  list: [],
};

export const standingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_STANDINGS_LIST:
      return {
        ...state,
        list: [...(action.payload as any[])],
      };

    default:
      return state;
  }
};

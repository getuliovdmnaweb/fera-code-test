import { combineReducers } from "redux";

import { leaguesReducer } from "./leagues";

export const rootReducer = combineReducers({
  leagues: leaguesReducer,
});

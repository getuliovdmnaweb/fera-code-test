import { combineReducers } from "redux";

import { leaguesReducer } from "./leagues";
import { standingsReducer } from "./standings";

export const rootReducer = combineReducers({
  leagues: leaguesReducer,
  standings: standingsReducer,
});

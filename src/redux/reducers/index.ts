import { combineReducers } from "redux";

import { leaguesReducer } from "./leagues";
import { standingsReducer } from "./standings";
import { teamReducer } from "./teams";

export const rootReducer = combineReducers({
  leagues: leaguesReducer,
  standings: standingsReducer,
  team: teamReducer,
});

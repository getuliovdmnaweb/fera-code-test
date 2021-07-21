import { call, all } from "redux-saga/effects";

import { watchLeagues } from "./leagues";
import { watchStandings } from "./standings";
import { watchTeam } from "./teams";

export function* initializeSagas() {
  yield all([call(watchLeagues), call(watchStandings), call(watchTeam)]);
}

import { call, all } from "redux-saga/effects";

import { watchLeagues } from "./leagues";
import { watchStandings } from "./standings";

export function* initializeSagas() {
  yield all([call(watchLeagues), call(watchStandings)]);
}

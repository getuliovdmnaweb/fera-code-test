import { call, all } from "redux-saga/effects";
import { watchLeagues } from "./leagues";

export function* initializeSagas() {
  yield all([call(watchLeagues)]);
}

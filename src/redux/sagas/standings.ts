import { takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";

import { FETCH_LEAGUE_STANDINGS, setStandingsList } from "../actions";
import { getLeagueStandings } from "./api";

export function* fetchStandings(action: AnyAction): any {
  try {
    const { leagueId, leagueYear } = action.payload;
    const response = yield call(() => getLeagueStandings(leagueId, leagueYear));

    yield put(setStandingsList(response));
  } catch (e) {}
}

export function* watchStandings() {
  yield takeLatest(FETCH_LEAGUE_STANDINGS, fetchStandings);
}

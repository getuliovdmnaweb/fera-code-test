import { takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";

import {
  FETCH_LEAGUE_STANDINGS,
  setLoadingStandings,
  setStandingsList,
} from "../actions";
import { getLeagueStandings } from "./api";

export function* fetchStandings(action: AnyAction): any {
  try {
    yield put(setLoadingStandings(true));
    const { leagueId, leagueYear } = action.payload;
    const response = yield call(() => getLeagueStandings(leagueId, leagueYear));

    yield put(setStandingsList(response));
    yield put(setLoadingStandings(false));
  } catch (e) {
    console.log("Fetch Standings Saga", e);
    yield put(setLoadingStandings(false));
  }
}

export function* watchStandings() {
  yield takeLatest(FETCH_LEAGUE_STANDINGS, fetchStandings);
}

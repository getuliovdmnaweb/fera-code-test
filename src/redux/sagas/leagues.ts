import { takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";

import {
  FETCH_SEARCHED_LEAGUE,
  setLeaguesList,
  setLoadingLeagues,
} from "../actions";
import { fetchLeague } from "./api";

export function* fetchSearchedLeaguesSaga(action: AnyAction): any {
  try {
    yield put(setLoadingLeagues(true));
    const countryCode = action.payload;
    const leagues = yield call(() => fetchLeague(countryCode));
    yield put(setLeaguesList(leagues));
    yield put(setLoadingLeagues(false));
  } catch (e) {
    yield put(setLoadingLeagues(false));
  }
}

export function* watchLeagues() {
  yield takeLatest(FETCH_SEARCHED_LEAGUE, fetchSearchedLeaguesSaga);
}

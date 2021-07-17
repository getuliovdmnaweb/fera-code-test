import { takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";

import { FETCH_SEARCHED_LEAGUE, setLeaguesList } from "../actions";
import { fetchLeague } from "./api";

export function* fetchSearchedLeaguesSaga(action: AnyAction): any {
  try {
    const country = action.payload;
    const leagues = yield call(() => fetchLeague(country));

    yield put(setLeaguesList(leagues));

    console.log(leagues);
  } catch (e) {
    console.log(e);
  }
}

export function* watchLeagues() {
  yield takeLatest(FETCH_SEARCHED_LEAGUE, fetchSearchedLeaguesSaga);
}

import { takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";

import {
  FETCH_TEAM_INFORMATION,
  setLoadingTeam,
  setTeamInformation,
} from "../actions";

import { getTeamInformation } from "./api";

export function* fetchTeamSaga(action: AnyAction): any {
  try {
    yield put(setLoadingTeam(true));
    const teamId = action.payload;

    const response = yield call(() => getTeamInformation(teamId));
    yield put(setTeamInformation(response));
    yield put(setLoadingTeam(false));
  } catch (e) {
    console.log("fetchTeam", e);
    yield put(setLoadingTeam(false));
  }
}

export function* watchTeam() {
  yield takeLatest(FETCH_TEAM_INFORMATION, fetchTeamSaga);
}

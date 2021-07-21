import { takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";

import { FETCH_TEAM_INFORMATION, setTeamInformation } from "../actions";

import { getTeamInformation } from "./api";

export function* fetchTeamSaga(action: AnyAction): any {
  try {
    const teamId = action.payload;

    const response = yield call(() => getTeamInformation(teamId));
    yield put(setTeamInformation(response));
  } catch (e) {
    console.log("fetchTeam", e);
  }
}

export function* watchTeam() {
  yield takeLatest(FETCH_TEAM_INFORMATION, fetchTeamSaga);
}

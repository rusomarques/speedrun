import { put, takeLatest, all } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import {
  actionTypes,
  loadGamesSuccess,
  loadFailure,
  loadRunSuccess
} from './actions';

es6promise.polyfill();

function* loadGamesSaga() {
  try {
    const res = yield fetch('https://www.speedrun.com/api/v1/games');
    const data = yield res.json();
    yield put(loadGamesSuccess(data.data));
  } catch (err) {
    yield put(loadFailure(err));
  }
}

function* loadRunSaga(action) {
  try {
    const runResponse = yield fetch(
      `https://www.speedrun.com/api/v1/runs?game=${action.gameId}`
    );
    const runData = yield runResponse.json();
    const firstRun = runData.data[0];
    const playerResponse = yield fetch(firstRun.players[0].uri);
    const playerData = yield playerResponse.json();
    let playerName = 'username';
    if (playerData.data.name) {
      playerName = playerData.data.name;
    } else if (playerData.data.names) {
      playerName = playerData.data.names.international;
    }
    let runInfo = {
      playerName,
      time: firstRun.times.primary_t,
      videoUrl: firstRun.videos.links[0].uri
    };
    yield put(loadRunSuccess(runInfo));
  } catch (err) {
    yield put(loadFailure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_GAMES, loadGamesSaga),
    takeLatest(actionTypes.LOAD_RUN, loadRunSaga)
  ]);
}

export default rootSaga;

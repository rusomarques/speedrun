import { put, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { actionTypes, loadGamesSuccess, loadFailure } from './actions';

es6promise.polyfill();

function* loadGamesSaga() {
  try {
    const res = yield fetch('https://www.speedrun.com/api/v1/games');
    const data = yield res.json();
    yield put(loadGamesSuccess(data));
  } catch (err) {
    yield put(loadFailure(err));
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.LOAD_GAMES, loadGamesSaga);
}

export default rootSaga;

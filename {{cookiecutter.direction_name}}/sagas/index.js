import { all, take } from 'redux-saga/effects';
import { REHYDRATION_COMPLETE, SET_TOP_NAVIGATION_COMPLETE } from '../reducers';

export default function* rootSaga() {
  yield all([
    take(REHYDRATION_COMPLETE),
    take(SET_TOP_NAVIGATION_COMPLETE),
  ]);
}

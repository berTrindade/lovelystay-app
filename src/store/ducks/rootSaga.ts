import { all, takeLatest } from 'redux-saga/effects';
import { load } from './repositories/sagas';
import { RepositoriesTypes } from './repositories/types';

export default function* rootSaga() {
  yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
}
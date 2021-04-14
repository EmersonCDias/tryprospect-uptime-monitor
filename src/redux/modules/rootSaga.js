import { all } from 'redux-saga/effects';

import sagas from './uptimes/sagas';

export default function* rootSaga() {
  return yield all([sagas]);
}

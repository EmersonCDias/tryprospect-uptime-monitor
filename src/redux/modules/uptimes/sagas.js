import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { getUptimeResponse } from './actions';

export function* getUptimeList({ payload }) {
  const { domain } = payload;

  try {
    const { data } = yield call(api.get, `/status?domain=${domain}`);

    yield put(getUptimeResponse(data));
  } catch (error) {
    console.log('Error', error);
  }
}

export default all([
  takeLatest('@uptimes/LIST_REQUEST', getUptimeList),
]);

import { all } from 'redux-saga/effects'

import { saga } from './sagas/authSagas'

export default function* rootSaga() {
  yield all([saga()])
}

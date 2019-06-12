import { all } from 'redux-saga/effects'

import authSagas from './sagas/authSagas'
import playerSagas from './sagas/playerSagas'

export default function* rootSaga() {
  yield all([authSagas(), playerSagas()])
}

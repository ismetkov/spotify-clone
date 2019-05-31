import { call, put, takeLatest } from 'redux-saga/effects'

import AuthService from '../helpers/services/authApi'
import { setTokenHeader } from '../actions/authActions'
import history from '../history'
import {
  REQUEST_SIGNUP,
  REQUEST_SIGNIN,
  AUTH_ERROR,
  AUTH_SUCCESS,
  REQUEST_RESET_PASSWORD,
  REQUEST_RESET_PASSWORD_SUCCESS,
  REQUEST_RESET_PASSWORD_ERROR,
  SUCCESS_PASSWORD_RESET_MSG,
  REQUEST_NEW_PASSWORD,
  REQUEST_RESET_NEW_PASSWORD_SUCCESS,
  REQUEST_RESET_NEW_PASSWORD_ERROR,
} from '../actions/types'

function* signup(action) {
  try {
    const res = yield call(AuthService.signup, action.payload)

    yield put({ type: AUTH_SUCCESS, payload: res.data.token })
    localStorage.setItem('token', res.data.token)
    setTokenHeader(res.data.token)
    history.push('/')
  } catch (err) {
    yield put({ type: AUTH_ERROR, payload: 'Email in use' })
  }
}

function* signin(action) {
  try {
    const res = yield call(AuthService.signin, action.payload)
    localStorage.setItem('token', res.data.token)
    setTokenHeader(res.data.token)
    yield put({ type: AUTH_SUCCESS, payload: res.data.token })
    history.push('/')
  } catch (err) {
    yield put({ type: AUTH_ERROR, payload: 'Incorrect email/password' })
  }
}

function* requestReset(action) {
  try {
    yield call(AuthService.requestResetPassword, action.payload)
    yield put({ type: REQUEST_RESET_PASSWORD_SUCCESS })
    yield put({
      type: SUCCESS_PASSWORD_RESET_MSG,
      payload: 'You have been emailed a password reset link.',
    })
  } catch (err) {
    yield put({
      type: REQUEST_RESET_PASSWORD_ERROR,
      payload: err.response.data,
    })
  }
}

function* resetPassword(action) {
  try {
    yield call(AuthService.resetPassword, action.payload)
    yield put({
      type: REQUEST_RESET_NEW_PASSWORD_SUCCESS,
      payload: 'Password successfully changed',
    })

    history.push('/')
  } catch (err) {
    yield put({
      type: REQUEST_RESET_NEW_PASSWORD_ERROR,
      payload: err.response.data,
    })
  }
}
export function* saga() {
  yield takeLatest(REQUEST_SIGNUP, signup)
  yield takeLatest(REQUEST_SIGNIN, signin)
  yield takeLatest(REQUEST_RESET_PASSWORD, requestReset)
  yield takeLatest(REQUEST_NEW_PASSWORD, resetPassword)
}

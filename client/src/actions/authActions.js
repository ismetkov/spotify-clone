import {
  REQUEST_SIGNUP,
  AUTH_LOGOUT,
  REQUEST_SIGNIN,
  AUTH_SUCCESS,
  REQUEST_RESET_PASSWORD,
  CLEAR_AUTH_ERROR_MSG,
  REQUEST_NEW_PASSWORD
} from './types'
import axios from 'axios'
import history from '../history'

export const setTokenHeader = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export const signup = payload => ({
  type: REQUEST_SIGNUP,
  payload
})

export const signin = payload => ({
  type: REQUEST_SIGNIN,
  payload
})

export const logout = () => {
  localStorage.clear('token')
  history.push('/')

  return {
    type: AUTH_LOGOUT
  }
}

export const facebookLogin = payload => {
  localStorage.setItem('token', payload)

  return {
    type: AUTH_SUCCESS,
    payload
  }
}

export const requestResetPassword = payload => ({
  type: REQUEST_RESET_PASSWORD,
  payload
})

export const resetNewPassword = payload => ({
  type: REQUEST_NEW_PASSWORD,
  payload
})

export const clearAuthErrorMsg = payload => ({
  type: CLEAR_AUTH_ERROR_MSG,
  payload
})

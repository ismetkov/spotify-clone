import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  REQUEST_SIGNUP,
  REQUEST_SIGNIN,
  CLEAR_AUTH_ERROR_MSG,
  REQUEST_RESET_PASSWORD_ERROR,
  SUCCESS_PASSWORD_RESET_MSG,
  REQUEST_RESET_PASSWORD,
  REQUEST_RESET_NEW_PASSWORD_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  authenticated: '',
  errorMsg: '',
  passwordResetSuccessMsg: '',
  loading: false
}

function auth_reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SIGNUP:
    case REQUEST_SIGNIN:
    case REQUEST_RESET_PASSWORD:
      return { ...state, loading: true, errorMsg: '' }

    case AUTH_SUCCESS:
      return {
        ...state,
        authenticated: action.payload,
        loading: false,
        errorMsg: ''
      }

    case AUTH_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
        authenticated: ''
      }

    case AUTH_LOGOUT:
      return { ...INITIAL_STATE }

    case CLEAR_AUTH_ERROR_MSG:
      return { ...INITIAL_STATE, errorMsg: '' }

    case REQUEST_RESET_PASSWORD_ERROR:
      return { ...INITIAL_STATE, errorMsg: action.payload, loading: false }

    case SUCCESS_PASSWORD_RESET_MSG:
      return {
        ...INITIAL_STATE,
        passwordResetSuccessMsg: action.payload,
        loading: false
      }

    case REQUEST_RESET_NEW_PASSWORD_SUCCESS:
      return { ...state, passwordResetSuccessMsg: action.payload }

    default:
      return state
  }
}

export default auth_reducer

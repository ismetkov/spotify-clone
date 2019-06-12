import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer'
import playerReducer from './playerReducer'

const allReducers = combineReducers({
  form: reduxForm,
  auth: authReducer,
  player: playerReducer
})

export default allReducers

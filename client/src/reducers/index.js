import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer'

const allReducers = combineReducers({
  form: reduxForm,
  auth: authReducer,
})

export default allReducers

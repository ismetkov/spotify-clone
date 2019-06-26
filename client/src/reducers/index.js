import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import playerReducer from './playerReducer';
import musicReducer from './musicReducer';

const allReducers = combineReducers({
  form: reduxForm,
  auth: authReducer,
  player: playerReducer,
  music: musicReducer
});

export default allReducers;

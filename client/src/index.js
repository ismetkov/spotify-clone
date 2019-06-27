import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import { configureStore } from './store';
import { setCurrentUser } from './actions';

import Root from './components/Root';

import './style.css';
import 'material-design-icons/iconfont/material-icons.css';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(sagaMiddleware);

sagaMiddleware.run(rootSaga);

if (localStorage.token) {
  try {
    const userInfo = jwtDecode(localStorage.token);

    store.dispatch(setCurrentUser(userInfo.sub));
  } catch (error) {
    store.dispatch(setCurrentUser({}));
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#root')
);

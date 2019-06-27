import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = sagaMiddleware => {
  const store = createStore(
    reducers,
    {
      auth: {
        authenticated: localStorage.getItem('token')
      }
    },
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  return store;
};

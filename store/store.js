import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { initState } from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = (initialState = initState) => {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();

  return store;
};

export default configureStore;

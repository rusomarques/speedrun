import { createStore } from 'redux';

import rootReducer, { initState } from './reducer';

const configureStore = (initialState = initState) => {
  const store = createStore(rootReducer, initialState);

  return store;
};

export default configureStore;

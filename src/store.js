import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer, { initialState } from './reducers';
import rootSaga from './sagas';

const configureStore = (state) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    state,
    applyMiddleware(
      sagaMiddleware, logger(),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configureStore(initialState);

export default store;

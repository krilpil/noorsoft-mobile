import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './slices';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const createDebugger = require('redux-flipper').default;
const sagaMiddleware = createSagaMiddleware();

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, createDebugger()],
    devTools: true,
  });
};

export const store = setupStore();
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

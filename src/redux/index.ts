import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducers";
import { initializeSagas } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(initializeSagas);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

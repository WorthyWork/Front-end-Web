import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

export default store;
